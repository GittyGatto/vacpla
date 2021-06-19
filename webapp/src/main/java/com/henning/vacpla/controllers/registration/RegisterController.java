package com.henning.vacpla.controllers.registration;


import com.henning.vacpla.business.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
public class RegisterController {

    private UserService userService;

    @Autowired
    public RegisterController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/api/register", method = RequestMethod.POST, consumes = "application/json")
    public void registerNewUser(
            @RequestBody() RegistrationRequest registrationRequest, HttpServletRequest httpRequest) throws IOException {
        userService.registerNewUserAccount(registrationRequest);
    }
}
