package com.henning.vacpla.business.user;

import com.henning.vacpla.controllers.auth.LoginRequest;
import com.henning.vacpla.controllers.users.UserDao;
import com.henning.vacpla.controllers.vacation.Requester;
import com.henning.vacpla.domain.role.Role;
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
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public User loadUserByUsername(String name) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByUserName(name).orElseThrow(() -> new UsernameNotFoundException(String.format("User %s does not exist!", name)));
        return new User(userEntity);
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public User registerNewUserAccount(LoginRequest accountDto) {
        UserEntity user = new UserEntity();
        user.setUserName(accountDto.userName);
        user.setPassword(passwordEncoder.encode(accountDto.password));
        //TODO: role should be in params
        user.setRole(Role.ADMIN);
        user.setTotalVacation(10);
        UserEntity userEntity = userRepository.save(user);
        return new User(userEntity);
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
        userDao.setTotalVacation(userEntity.getTotalVacation());
        userDao.setEntry(userEntity.getEntry().toString());
        if (userEntity.getExit() != null){
            userDao.setExit(userEntity.getExit().toString());
        }
        return userDao;
    }
}
