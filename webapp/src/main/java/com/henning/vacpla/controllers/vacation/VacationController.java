package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.request.GetRequestsBusinessService;
import com.henning.vacpla.business.request.dtos.OverviewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class VacationController {

    private GetRequestsBusinessService getRequestsBusinessService;

    @Autowired
    public VacationController(GetRequestsBusinessService getRequestsBusinessService) {
        this.getRequestsBusinessService = getRequestsBusinessService;
    }

    @RequestMapping(value = "/api/vacation", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<OverviewDto> getUserVacation(@RequestBody Requester requester) {
        return new ResponseEntity<>(getRequestsBusinessService.getRequestOverview(requester.userName), HttpStatus.OK);
    }
}
