package com.henning.vacpla.controllers.auth;


import com.henning.vacpla.business.user.UserService;
import com.henning.vacpla.domain.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
public class LoginResource {
    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @RequestMapping(value = "/api/login", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity<User> login(@RequestBody() LoginRequest loginRequest, HttpServletRequest httpRequest) throws IOException {
        try {
            User user = userService.loadUserByUsername(loginRequest.userName);
            if (passwordEncoder.matches(loginRequest.password, user.password)) {
                ResponseEntity<User> ok = ResponseEntity.ok(user);
                return ok;
            } else
                return returnErrorResponse(httpRequest, null);
        } catch (Exception ex) {
            return returnErrorResponse(httpRequest, ex);
        }
    }

    private ResponseEntity<User> returnErrorResponse(HttpServletRequest httpRequest, Exception ex) {
        ResponseEntity<User> response = ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        return response;
    }
}
