package com.henning.vacpla.controllers.logout;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
public class LogoutController {

    @RequestMapping(value = "/api/logout", method = RequestMethod.POST, consumes = "application/json")
    public void logout(@RequestBody() LogoutRequest logoutRequest, HttpServletRequest httpRequest) throws IOException {
        //TODO: that doesn't seams right.
    }
}
