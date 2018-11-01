package com.henning.vacpla.business.vacationRequest;

import com.henning.vacpla.controllers.vacation.VacationRequest;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.user.UserRepository;
import com.henning.vacpla.domain.vacationRequest.VacationRequestEntity;
import com.henning.vacpla.domain.vacationRequest.VacationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class GetUserVacationBusinessService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VacationRequestRepository vacationRequestRepository;

    public VacationRequestDto getUserVacation(String userName) {
        UserEntity userEntity = userRepository.findByUserName(userName).orElseThrow(() -> new UsernameNotFoundException("No user found with username " + userName));
        List<VacationRequestEntity> vacationRequestEntities = vacationRequestRepository.findByUzer(Optional.ofNullable(userEntity)).orElse(null);
        return fillVacationRequestDto(userEntity, vacationRequestEntities);
    }

    private VacationRequestDto fillVacationRequestDto(UserEntity userEntity, List<VacationRequestEntity> vacationRequestEntity) {
        //ToDo create useful content
        return null;
    }
}
