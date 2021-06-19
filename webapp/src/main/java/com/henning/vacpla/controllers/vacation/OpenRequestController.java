package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.request.dtos.OpenRequestsDto;
import com.henning.vacpla.business.request.GetOpenRequestBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class OpenRequestController {

    private GetOpenRequestBusinessService getOpenRequestBusinessService;

    @Autowired
    public OpenRequestController(GetOpenRequestBusinessService getOpenRequestBusinessService) {
        this.getOpenRequestBusinessService = getOpenRequestBusinessService;
    }

    @RequestMapping(value = "/api/openRequests", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<OpenRequestsDto> getOpenRequests(@RequestBody Requester requester) {
        return new ResponseEntity<>(getOpenRequestBusinessService.getOpenRequests(requester.userName), HttpStatus.OK);
    }
}
