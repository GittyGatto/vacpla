package com.henning.vacpla.controllers.auth;


import com.henning.vacpla.business.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
public class RegUserResource {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/api/registration", method = RequestMethod.POST, consumes = "application/json")
    public void login(
            @RequestBody() LoginRequest loginRequest, HttpServletRequest httpRequest) throws IOException {
        userService.registerNewUserAccount(loginRequest);
    }
}
