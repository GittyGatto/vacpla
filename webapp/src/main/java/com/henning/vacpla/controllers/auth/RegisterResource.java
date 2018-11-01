package com.henning.vacpla.controllers.auth;


import com.henning.vacpla.business.user.UserService;
import com.henning.vacpla.domain.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
public class RegisterResource {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/api/register", method = RequestMethod.POST, consumes = "application/json")
    public void registerNewUser(
            @RequestBody() LoginRequest loginRequest, HttpServletRequest httpRequest) throws IOException {
        User user = userService.registerNewUserAccount(loginRequest);
    }
}
