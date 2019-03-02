package com.henning.vacpla.business.user;

import com.henning.vacpla.controllers.users.AllUsersRequest;
import com.henning.vacpla.domain.user.User;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserBusinessService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers(AllUsersRequest allUsersRequest) {
        List<UserEntity> userEntities = userRepository.findAll();
        return getUsersFromUserEntities(userEntities);
    }

    private List<User> getUsersFromUserEntities(List<UserEntity> userEntities) {
        List<User> users = new ArrayList<>();
        for (UserEntity userEntity : userEntities) {
            User user = new User();
            user.userName = userEntity.getUserName();
            user.role= userEntity.getRole();
            user.totalVacation = userEntity.getTotalVacation();
            user.entry = userEntity.getEntry().toString();
            if (userEntity.getExit() != null) {
                user.entry = userEntity.getExit().toString();
            }
            users.add(user);
        }
        return users;
    }
}
