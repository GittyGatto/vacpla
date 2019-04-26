package com.henning.vacpla.business.request;

import com.henning.vacpla.business.request.dtos.OpenRequestsDto;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.user.UserRepository;
import com.henning.vacpla.domain.vacation_request.VacationRequestEntity;
import com.henning.vacpla.domain.vacation_request.VacationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetOpenRequestBusinessService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private VacationRequestRepository vacationRequestRepository;
    @Autowired
    private RequestDtoBusinessService requestDtoBusinessService;

    public OpenRequestsDto getOpenRequests(String userName) {
        UserEntity userEntity = userRepository.findByUserName(userName).get();
        List<VacationRequestEntity> openRequests = vacationRequestRepository.findOpenRequests(userEntity.getId()).get();
        return fillOpenRequestsDto(openRequests);
    }

    public OpenRequestsDto fillOpenRequestsDto(List<VacationRequestEntity> openRequests) {
        OpenRequestsDto dto = new OpenRequestsDto();
        dto.vacationRequests = requestDtoBusinessService.fillRequestDtos(openRequests);
        return dto;
    }
}
