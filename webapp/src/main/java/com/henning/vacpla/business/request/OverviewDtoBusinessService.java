package com.henning.vacpla.business.request;

import com.henning.vacpla.business.annual_leave.AnnualLeaveBusinessService;
import com.henning.vacpla.business.request.dtos.OverviewDto;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.vacation_request.VacationRequestEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OverviewDtoBusinessService {

    private final AnnualLeaveBusinessService annualLeaveBusinessService;
    private final RequestDtoBusinessService requestDtoBusinessService;

    @Autowired
    public OverviewDtoBusinessService(AnnualLeaveBusinessService annualLeaveBusinessService, RequestDtoBusinessService requestDtoBusinessService) {
        this.annualLeaveBusinessService = annualLeaveBusinessService;
        this.requestDtoBusinessService = requestDtoBusinessService;
    }

    public OverviewDto fillOverviewDto(UserEntity userEntity, List<VacationRequestEntity> vacationRequestEntities) {
        OverviewDto overviewDto = new OverviewDto();
        overviewDto.setAnnualLeaves(annualLeaveBusinessService.getAnnualLeaveDtos(userEntity));
        overviewDto.setVacationRequests(requestDtoBusinessService.fillRequestDtos(vacationRequestEntities));
        return overviewDto;
    }
}
