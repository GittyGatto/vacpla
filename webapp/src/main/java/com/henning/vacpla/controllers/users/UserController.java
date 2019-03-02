package com.henning.vacpla.controllers.users;

import com.henning.vacpla.business.user.UserBusinessService;
import com.henning.vacpla.controllers.vacation.Requester;
import com.henning.vacpla.domain.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserBusinessService userBusinessService;

    @RequestMapping(value = "/api/users", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<List<User>> getAllUsers(@RequestBody Requester requester) {
        return new ResponseEntity<>(userBusinessService.getAllUsers(requester), HttpStatus.OK);
    }
}
