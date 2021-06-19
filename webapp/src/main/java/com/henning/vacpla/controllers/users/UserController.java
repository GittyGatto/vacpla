package com.henning.vacpla.controllers.users;

import com.henning.vacpla.business.user.UserService;
import com.henning.vacpla.controllers.vacation.Requester;
import com.henning.vacpla.domain.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private UserService userService;
    private UserRepository userRepository;

    @Autowired
    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "/api/users", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<List<UserDao>> getAllUsers(@RequestBody Requester requester) {
        return new ResponseEntity<>(userService.getAllUsers(requester), HttpStatus.OK);
    }
}
