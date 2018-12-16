package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.vacationRequest.GetUserVacationBusinessService;
import com.henning.vacpla.business.vacationRequest.VacationOverviewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class NewVacationController {

    @Autowired
    private GetUserVacationBusinessService getUserVacationBusinessService;

    @RequestMapping(value = "/api/vacationRequest", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<VacationOverviewDto> saveNewVacationRequest(@RequestBody NewVacationRequest newVacationRequest) {
        return new ResponseEntity<>(getUserVacationBusinessService.saveNewVacationRequest(newVacationRequest.userName, newVacationRequest.range, newVacationRequest.vacationDays, newVacationRequest.uuid), HttpStatus.OK);
    }

}
