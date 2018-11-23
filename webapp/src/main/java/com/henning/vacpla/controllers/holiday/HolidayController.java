package com.henning.vacpla.controllers.holiday;

import com.henning.vacpla.business.holiday.GetHolidaysBuisnessService;
import com.henning.vacpla.business.holiday.HolidayDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HolidayController {

    @Autowired
    private GetHolidaysBuisnessService getHolidaysBuisnessService;

    @RequestMapping(value = "/api/holiday", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<List<HolidayDto>> getUserVacation() {
        return new ResponseEntity<>(getHolidaysBuisnessService.getHolidays(), HttpStatus.OK);
    }
}
