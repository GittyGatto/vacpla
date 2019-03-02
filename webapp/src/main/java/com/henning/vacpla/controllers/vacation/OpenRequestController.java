package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.vacationRequest.GetUserVacationBusinessService;
import com.henning.vacpla.business.openRequests.OpenRequestsDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class OpenRequestController {

    @Autowired
    private GetUserVacationBusinessService getUserVacationBusinessService;

    @RequestMapping(value = "/api/openRequests", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<OpenRequestsDto> getOpenRequests(@RequestBody Requester requester) {
        return new ResponseEntity<>(getUserVacationBusinessService.getOpenRequests(requester.userName), HttpStatus.OK);
    }
}
