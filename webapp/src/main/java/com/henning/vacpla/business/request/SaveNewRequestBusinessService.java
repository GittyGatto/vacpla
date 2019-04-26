package com.henning.vacpla.business.request;

import com.henning.vacpla.business.user.UserService;
import com.henning.vacpla.business.util.DateUtil;
import com.henning.vacpla.business.request.dtos.OverviewDto;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.vacation_request.VacationCategory;
import com.henning.vacpla.domain.vacation_request.VacationRequestEntity;
import com.henning.vacpla.domain.vacation_request.VacationRequestRepository;
import com.henning.vacpla.domain.vacation_request.VacationRequestStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SaveNewRequestBusinessService {

    @Autowired
    private UserService userService;
    @Autowired
    private VacationRequestRepository vacationRequestRepository;
    @Autowired
    private DateUtil dateUtil;
    @Autowired
    private OverviewDtoBusinessService overviewDtoBusinessService;

    public OverviewDto saveNewRequest(String userName, String[] range, long vacationDays, String uuid) {
        UserEntity userEntity = userService.getUserEntity(userName);
        VacationRequestEntity vacRequest = new VacationRequestEntity();
        vacRequest.setUuid(uuid);
        vacRequest.setUzer(userEntity);
        vacRequest.setRequested(new Date());
        vacRequest.setVacationRequestStatus(VacationRequestStatus.REQUESTED);
        vacRequest.setFrom(dateUtil.parseDate(range[0]));
        vacRequest.setTo(dateUtil.parseDate(range[1]));
        vacRequest.setVacationCount(vacationDays);
        vacRequest.setVacationCategory(VacationCategory.PAID);
        VacationRequestEntity savedEntity = vacationRequestRepository.save(vacRequest);

        List<VacationRequestEntity> vacationRequestEntities = new ArrayList<>();
        vacationRequestEntities.add(savedEntity);

        return overviewDtoBusinessService.fillOverviewDto(userEntity, vacationRequestEntities);
    }
}
