package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.vacationRequest.GetUserVacationBusinessService;
import com.henning.vacpla.business.vacationRequest.VacationOverviewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class VacationController {

    @Autowired
    private GetUserVacationBusinessService getUserVacationBusinessService;

    @RequestMapping(value = "/api/vacation", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<VacationOverviewDto> getUserVacation(@RequestBody Requester requester) {
        return new ResponseEntity<>(getUserVacationBusinessService.getUserVacation(requester.userName), HttpStatus.OK);
    }
}
