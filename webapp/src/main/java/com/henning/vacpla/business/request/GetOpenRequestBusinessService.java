package com.henning.vacpla.business.request;

import com.henning.vacpla.business.request.dtos.OpenRequestsDto;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.user.UserRepository;
import com.henning.vacpla.domain.vacation_request.VacationRequestEntity;
import com.henning.vacpla.domain.vacation_request.VacationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Collections;
import java.util.List;

@Service
public class GetOpenRequestBusinessService {

    private final UserRepository userRepository;
    private final VacationRequestRepository vacationRequestRepository;
    private final RequestDtoBusinessService requestDtoBusinessService;

    @Autowired
    public GetOpenRequestBusinessService(UserRepository userRepository, VacationRequestRepository vacationRequestRepository, RequestDtoBusinessService requestDtoBusinessService) {
        this.userRepository = userRepository;
        this.vacationRequestRepository = vacationRequestRepository;
        this.requestDtoBusinessService = requestDtoBusinessService;
    }


    public OpenRequestsDto getOpenRequests(String userName) {
        UserEntity userEntity = userRepository.findByUserName(userName).orElseThrow(() -> new EntityNotFoundException(userName));
        List<VacationRequestEntity> openRequests = vacationRequestRepository.findOpenRequests(userEntity.getId()).orElseGet(Collections::emptyList);
        return fillOpenRequestsDto(openRequests);
    }

    public OpenRequestsDto fillOpenRequestsDto(List<VacationRequestEntity> openRequests) {
        OpenRequestsDto dto = new OpenRequestsDto();
        dto.vacationRequests = requestDtoBusinessService.fillRequestDtos(openRequests);
        return dto;
    }
}
