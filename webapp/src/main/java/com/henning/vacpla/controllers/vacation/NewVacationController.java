package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.request.SaveNewRequestBusinessService;
import com.henning.vacpla.business.request.dtos.OverviewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class NewVacationController {

    private SaveNewRequestBusinessService saveNewRequestBusinessService;

    @Autowired
    public NewVacationController(SaveNewRequestBusinessService saveNewRequestBusinessService) {
        this.saveNewRequestBusinessService = saveNewRequestBusinessService;
    }

    @RequestMapping(value = "/api/vacationRequest", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<OverviewDto> saveNewVacationRequest(@RequestBody NewVacationRequest newVacationRequest) {
        return new ResponseEntity<>(saveNewRequestBusinessService.saveNewRequest(newVacationRequest.userName, newVacationRequest.range, newVacationRequest.vacationDays, newVacationRequest.uuid), HttpStatus.OK);
    }

}
