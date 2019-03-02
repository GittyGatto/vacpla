package com.henning.vacpla.controllers.users;

import com.henning.vacpla.business.holiday.GetHolidaysBuisnessService;
import com.henning.vacpla.business.holiday.HolidayDto;
import com.henning.vacpla.business.user.UserBusinessService;
import com.henning.vacpla.controllers.vacation.VacationRequest;
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
    ResponseEntity<List<User>> getAllUsers(@RequestBody AllUsersRequest allUsersRequest) {
        return new ResponseEntity<>(userBusinessService.getAllUsers(allUsersRequest), HttpStatus.OK);
    }
}
