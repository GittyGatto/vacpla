package com.henning.vacpla.business.request;

import com.henning.vacpla.business.annual_leave.AnnualLeaveBusinessService;
import com.henning.vacpla.business.user.UserService;
import com.henning.vacpla.business.request.dtos.OverviewDto;
import com.henning.vacpla.business.request.dtos.RequestDto;
import com.henning.vacpla.business.request.dtos.ViewRequestDto;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.vacation_request.VacationRequestEntity;
import com.henning.vacpla.domain.vacation_request.VacationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class GetRequestsBusinessService {

    private final VacationRequestRepository vacationRequestRepository;
    private final AnnualLeaveBusinessService annualLeaveBusinessService;
    private final UserService userService;
    private final OverviewDtoBusinessService overviewDtoBusinessService;
    private final RequestDtoBusinessService requestDtoBusinessService;

    @Autowired
    public GetRequestsBusinessService(VacationRequestRepository vacationRequestRepository, AnnualLeaveBusinessService annualLeaveBusinessService, UserService userService, OverviewDtoBusinessService overviewDtoBusinessService, RequestDtoBusinessService requestDtoBusinessService) {
        this.vacationRequestRepository = vacationRequestRepository;
        this.annualLeaveBusinessService = annualLeaveBusinessService;
        this.userService = userService;
        this.overviewDtoBusinessService = overviewDtoBusinessService;
        this.requestDtoBusinessService = requestDtoBusinessService;
    }


    public OverviewDto getRequestOverview(String userName) {
        UserEntity userEntity = userService.getUserEntity(userName);
        List<VacationRequestEntity> vacationRequestEntities = vacationRequestRepository.findByUzer(Optional.ofNullable(userEntity)).orElse(null);
        return overviewDtoBusinessService.fillOverviewDto(userEntity, vacationRequestEntities);
    }

    public ViewRequestDto getRequest(String uuid) {
        VacationRequestEntity vacRequest = vacationRequestRepository.findByUuid(uuid).orElseThrow(() -> new EntityNotFoundException(uuid));
        RequestDto requestDto = requestDtoBusinessService.fillRequestDto(vacRequest);
        ViewRequestDto viewRequestDto = new ViewRequestDto();
        viewRequestDto.setRequest(requestDto);

        UserEntity userEntity = vacRequest.getUzer();
        List<VacationRequestEntity> vacRequests = vacationRequestRepository.findByUzer(Optional.of(userEntity)).orElseGet(Collections::emptyList);
        HashMap<Integer, List<RequestDto>> contextRequests = requestDtoBusinessService.fillRequestDtos(vacRequests);
        viewRequestDto.setVacationRequests(contextRequests);

        viewRequestDto.setAnnualLeaves(annualLeaveBusinessService.getAnnualLeaveDtos(userEntity));

        return viewRequestDto;
    }
}
