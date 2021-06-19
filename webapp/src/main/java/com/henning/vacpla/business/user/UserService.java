package com.henning.vacpla.business.user;

import com.henning.vacpla.business.annual_leave.AnnualLeaveBusinessService;
import com.henning.vacpla.business.role.Role;
import com.henning.vacpla.business.util.DateUtil;
import com.henning.vacpla.controllers.registration.RegistrationRequest;
import com.henning.vacpla.controllers.users.UserDao;
import com.henning.vacpla.controllers.vacation.Requester;
import com.henning.vacpla.domain.user.User;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private AnnualLeaveBusinessService annualLeaveBusinessService;
    private DateUtil dateUtil;

    @Autowired
    public void UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, AnnualLeaveBusinessService annualLeaveBusinessService, DateUtil dateUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.annualLeaveBusinessService = annualLeaveBusinessService;
        this.dateUtil = dateUtil;
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public User loadUserByUsername(String name) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByUserName(name).orElseThrow(() -> new UsernameNotFoundException(String.format("User %s does not exist!", name)));
        return new User(userEntity);
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public User registerNewUserAccount(RegistrationRequest registrationRequest) {

        String userName = registrationRequest.userName;
        String password = registrationRequest.password;
        String encodedPassword = passwordEncoder.encode(password);
        String roleString = registrationRequest.role;
        Integer initLeave = Integer.valueOf(registrationRequest.initLeave);
        Role role = Role.valueOf(roleString);
        Date entry = dateUtil.parseFrontendDate(registrationRequest.entry);

        UserEntity user = new UserEntity(userName, encodedPassword, role, entry);
        UserEntity userEntity = userRepository.save(user);

        annualLeaveBusinessService.setInitialAnnualLeave(userEntity, initLeave);

        return new User(userEntity);
    }

    public UserEntity getUserEntity(String userName) {
        return userRepository.findByUserName(userName).orElseThrow(() -> new UsernameNotFoundException("No user found with username " + userName));
    }

    public List<UserDao> getAllUsers(Requester requester) {
        List<UserEntity> userEntities = userRepository.findAll();
        return getUsersFromUserEntities(userEntities);
    }

    private List<UserDao> getUsersFromUserEntities(List<UserEntity> userEntities) {
        List<UserDao> users = new ArrayList<>();
        for (UserEntity userEntity : userEntities) {
            UserDao userDao = getUserDaoByEntity(userEntity);
            users.add(userDao);
        }
        return users;
    }

    private UserDao getUserDaoByEntity(UserEntity userEntity) {
        UserDao userDao = new UserDao();
        userDao.setUserName(userEntity.getUserName());
        userDao.setRole(userEntity.getRole());
        userDao.setAnnualLeaves(annualLeaveBusinessService.getAnnualLeaveDtos(userEntity));
        userDao.setEntry(userEntity.getEntry().toString());
        if (userEntity.getExit() != null) {
            userDao.setExit(userEntity.getExit().toString());
        }
        return userDao;
    }
}
