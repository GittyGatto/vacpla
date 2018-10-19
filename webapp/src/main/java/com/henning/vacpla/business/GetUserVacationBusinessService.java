package com.henning.vacpla.business;

import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.user.UserRepository;
import com.henning.vacpla.domain.vacation.VacationEntity;
import com.henning.vacpla.domain.vacation.VacationRepository;
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
    private VacationRepository vacationRepository;

    public VacationDto getUserVacation(String userName) {

        UserEntity userEntity = userRepository.findByUserName(userName).orElseThrow(() -> new UsernameNotFoundException("No user found with username " + userName));
        List<VacationEntity> vacationEntity = vacationRepository.findByUzer(Optional.ofNullable(userEntity)).orElse(null);
        return fillVacationDto(userEntity, vacationEntity);
    }

    private VacationDto fillVacationDto(UserEntity userEntity, List<VacationEntity> vacationEntity) {
        int totalVacation = userEntity.getTotalVacation();
        List<Date> vacations = getUserVacationList(vacationEntity);
        return new VacationDto(totalVacation, vacations);
    }

    private List<Date> getUserVacationList(List<VacationEntity> vacationEntity) {
        List<Date> vacations = new ArrayList<>();

        for (VacationEntity curr : vacationEntity) {
            Date vacationDay = curr.getVacationDay();
            vacations.add(vacationDay);
        }
        return vacations;
    }
}
