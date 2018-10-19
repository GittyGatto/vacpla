package com.henning.vacpla.controllers.vacation;

import com.henning.vacpla.business.GetUserVacationBusinessService;
import com.henning.vacpla.business.VacationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class VacationController {

    @Autowired
    private GetUserVacationBusinessService getUserVacationBusinessService;

    @RequestMapping(value = "/api/vacation", method = RequestMethod.GET, consumes = "application/json")
    public VacationDto getUserVacation(@RequestBody() VacationRequest vacationRequest) throws IOException {
        return getUserVacationBusinessService.getUserVacation(vacationRequest.userName);
    }

}
