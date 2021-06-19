package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.request.GetRequestsBusinessService;
import com.henning.vacpla.business.request.dtos.ViewRequestDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RequestController {

    private GetRequestsBusinessService getRequestsBusinessService;

    @Autowired
    public RequestController(GetRequestsBusinessService getRequestsBusinessService) {
        this.getRequestsBusinessService = getRequestsBusinessService;
    }

    @RequestMapping(value = "/api/viewRequest", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<ViewRequestDto> getOpenRequests(@RequestBody ViewVacationRequestRequest viewRequest) {
        return new ResponseEntity<>(getRequestsBusinessService.getRequest(viewRequest.userName, viewRequest.requestUuid), HttpStatus.OK);
    }

}
