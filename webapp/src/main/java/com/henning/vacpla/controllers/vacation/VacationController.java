package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.vacationRequest.GetUserVacationBusinessService;
import com.henning.vacpla.business.vacationRequest.VacationDto;
import com.henning.vacpla.business.vacationRequest.VacationOverviewDto;
import com.henning.vacpla.business.vacationRequest.VacationRequestDto;
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
    ResponseEntity<VacationOverviewDto> getUserVacation(@RequestBody VacationRequest vacationRequest) {
        return new ResponseEntity<>(getUserVacationBusinessService.getUserVacation(vacationRequest.userName), HttpStatus.OK);

    }

}
