package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.vacationRequest.GetUserVacationBusinessService;
import com.henning.vacpla.business.viewRequest.ViewRequestDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RequestController {

    @Autowired
    private GetUserVacationBusinessService getUserVacationBusinessService;

    @RequestMapping(value = "/api/viewRequest", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<ViewRequestDto> getOpenRequests(@RequestBody ViewVacationRequestRequest viewRequest) {
        return new ResponseEntity<>(getUserVacationBusinessService.getVacationRequest(viewRequest.userName, viewRequest.requestUuid), HttpStatus.OK);
    }

}
