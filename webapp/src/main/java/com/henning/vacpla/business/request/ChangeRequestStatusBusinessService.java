package com.henning.vacpla.business.request;

import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.user.UserRepository;
import com.henning.vacpla.domain.vacation_request.VacationRequestEntity;
import com.henning.vacpla.domain.vacation_request.VacationRequestRepository;
import com.henning.vacpla.domain.vacation_request.VacationRequestStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Date;

@Service
public class ChangeRequestStatusBusinessService {

    private final UserRepository userRepository;
    private final VacationRequestRepository vacationRequestRepository;

    @Autowired
    public ChangeRequestStatusBusinessService(UserRepository userRepository, VacationRequestRepository vacationRequestRepository) {
        this.userRepository = userRepository;
        this.vacationRequestRepository = vacationRequestRepository;
    }


    public void changeRequestStatus(String userName, String uuid, String status) {
        UserEntity userEntity = userRepository.findByUserName(userName).orElseThrow(() -> new EntityNotFoundException(userName));
        VacationRequestEntity vacationRequest = vacationRequestRepository.findByUuid(uuid).orElseThrow(() -> new EntityNotFoundException(uuid));

        if (status.equals(VacationRequestStatus.NOT_APPROVED.toString())) {
            vacationRequest.setVacationRequestStatus(VacationRequestStatus.NOT_APPROVED);
        }

        if (status.equals(VacationRequestStatus.APPROVED.toString())) {
            vacationRequest.setVacationRequestStatus(VacationRequestStatus.APPROVED);
            vacationRequest.setApproved(new Date());
            vacationRequest.setApprovedBy(userEntity);
        }

        if (status.equals(VacationRequestStatus.WITHDRAW.toString())) {
            vacationRequest.setVacationRequestStatus(VacationRequestStatus.WITHDRAW);
        }
        vacationRequestRepository.save(vacationRequest);
    }
}
