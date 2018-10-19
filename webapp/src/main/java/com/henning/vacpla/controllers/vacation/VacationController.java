package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.GetUserVacationBusinessService;
import com.henning.vacpla.business.VacationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class VacationController {

    @Autowired
    private GetUserVacationBusinessService getUserVacationBusinessService;

    @RequestMapping(value = "/api/vacation", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<VacationDto> getUserVacation(@RequestBody VacationRequest vacationRequest) {
        return new ResponseEntity<>(getUserVacationBusinessService.getUserVacation(vacationRequest.userName), HttpStatus.OK);

    }

}
