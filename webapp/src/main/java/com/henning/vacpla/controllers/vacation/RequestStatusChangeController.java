package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.vacationRequest.GetUserVacationBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RequestStatusChangeController {

    @Autowired
    private GetUserVacationBusinessService getUserVacationBusinessService;

    @RequestMapping(value = "/api/requestStatusChange", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<RequestStatusChangeDto> changeRequestStatus(@RequestBody ChangeRequestStatusRequest changeRequestStatusRequest) {
        return new ResponseEntity<>(getUserVacationBusinessService.changeRequestStatus(changeRequestStatusRequest.userName, changeRequestStatusRequest.uuid, changeRequestStatusRequest.uuid), HttpStatus.OK);
    }

}
