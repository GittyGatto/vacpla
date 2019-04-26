package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.request.ChangeRequestStatusBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RequestStatusChangeController {

    @Autowired
    private ChangeRequestStatusBusinessService changeRequestStatusBusinessService;

    @RequestMapping(value = "/api/requestStatusChange", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<?> changeRequestStatus(@RequestBody ChangeRequestStatusRequest changeRequestStatusRequest) {
        changeRequestStatusBusinessService.changeRequestStatus(changeRequestStatusRequest.userName, changeRequestStatusRequest.uuid, changeRequestStatusRequest.status);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
