package com.henning.vacpla.business.vacationRequest;

import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.user.UserRepository;
import com.henning.vacpla.domain.vacation.VacationEntity;
import com.henning.vacpla.domain.vacationRequest.VacationRequestEntity;
import com.henning.vacpla.domain.vacationRequest.VacationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class GetUserVacationBusinessService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VacationRequestRepository vacationRequestRepository;

    public VacationOverviewDto getUserVacation(String userName) {
        UserEntity userEntity = userRepository.findByUserName(userName).orElseThrow(() -> new UsernameNotFoundException("No user found with username " + userName));
        List<VacationRequestEntity> vacationRequestEntities = vacationRequestRepository.findByUzer(Optional.ofNullable(userEntity)).orElse(null);
        return fillVacationOverviewDto(userEntity, vacationRequestEntities);
    }

    private VacationOverviewDto fillVacationOverviewDto(UserEntity userEntity, List<VacationRequestEntity> vacationRequestEntities) {
        VacationOverviewDto overviewDto = new VacationOverviewDto();
        overviewDto.totalVacation = userEntity.getTotalVacation();
        overviewDto.vacationRequests = fillVacationRequestDtos(vacationRequestEntities);
        return overviewDto;
    }

    private HashMap<Integer, List<VacationRequestDto>> fillVacationRequestDtos(List<VacationRequestEntity> vacationRequestEntities) {
        HashMap<Integer, List<VacationRequestDto>> vacationRequests = new HashMap<>();
        HashSet<Integer> hashKeys = getHashKeys(vacationRequestEntities);

        for (Integer key : hashKeys) {
            List<VacationRequestDto> vacationRequestDtoList = new ArrayList<>();
            for (VacationRequestEntity curr : vacationRequestEntities) {
                if (getRequestYear(curr).equals(key)) {
                    VacationRequestDto requestDto = fillVacationRequestDto(curr);
                    vacationRequestDtoList.add(requestDto);
                    vacationRequests.put(key, vacationRequestDtoList);
                }
            }

        }
        return vacationRequests;
    }

    private HashSet<Integer> getHashKeys(List<VacationRequestEntity> vacationRequestEntities) {
        HashSet<Integer> keys = new HashSet<>();
        for (VacationRequestEntity curr : vacationRequestEntities) {
            Integer requestYear = getRequestYear(curr);
            keys.add(requestYear);
        }
        return keys;
    }

    private Integer getRequestYear(VacationRequestEntity curr) {
        Date date = new Date();
        Calendar calendar = new GregorianCalendar();
        calendar.setTime(curr.getRequested());
        return calendar.get(Calendar.YEAR);
    }

    private VacationRequestDto fillVacationRequestDto(VacationRequestEntity requestEntity) {
        VacationRequestDto requestDto = new VacationRequestDto();
        requestDto.setVacationRequestStatus(requestEntity.getVacationRequestStatus().toString());
        requestDto.setRequested(requestEntity.getRequested());
        if (requestEntity.getApproved() != null) {
            requestDto.setApproved(requestEntity.getApproved().toString());
            requestDto.setApprovedBy(requestEntity.getApprovedBy().getUserName());
        }
        requestDto.setVacations(fillVacationDtos(requestEntity.getVacations()));
        return requestDto;
    }

    private List<VacationDto> fillVacationDtos(List<VacationEntity> vacations) {
        List<VacationDto> vacationDtos = new ArrayList<>();
        for (VacationEntity curr : vacations) {
            VacationDto vacationDto = new VacationDto();
            vacationDto.setHoliday(curr.isHoliday());
            vacationDto.setVacationDay(curr.getVacationDay());
            vacationDtos.add(vacationDto);
        }
        return vacationDtos;
    }
}
