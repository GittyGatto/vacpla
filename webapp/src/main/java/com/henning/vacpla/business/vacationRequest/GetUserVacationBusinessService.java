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
        overviewDto.userName = userEntity.getUserName();
        overviewDto.totalVacation = userEntity.getTotalVacation();
        overviewDto.vacationRequests = fillVacationRequestDtos(vacationRequestEntities);
        return overviewDto;
    }

    private HashMap<Integer, List<VacationRequestDto>> fillVacationRequestDtos(List<VacationRequestEntity> vacationRequestEntities) {
        HashMap<Integer, List<VacationRequestDto>> vacationRequests = new HashMap<>();
        HashSet<Integer> hashKeys = getHashKeys(vacationRequestEntities);
        List<VacationRequestDto> vacationRequestDtoList = new ArrayList<>();
        for (Integer key : hashKeys) {
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
        calendar.setTime(date);
        return calendar.get(Calendar.YEAR);
    }

    private VacationRequestDto fillVacationRequestDto(VacationRequestEntity requestEntity) {
        VacationRequestDto requestDto = new VacationRequestDto();
        requestDto.vacationRequestStatus = requestEntity.getVacationRequestStatus().toString();
        requestDto.requested = requestEntity.getRequested();
        if (requestEntity.getApproved() != null) {
            requestDto.approved = requestEntity.getApproved().toString();
            requestDto.approvedBy = requestEntity.getApprovedBy().toString();
        }
        requestDto.vacations = fillVacationDtos(requestEntity.getVacations());
        return requestDto;
    }

    private List<VacationDto> fillVacationDtos(List<VacationEntity> vacations) {
        List<VacationDto> vacationDtos = new ArrayList<>();
        for (VacationEntity curr : vacations) {
            VacationDto vacationDto = new VacationDto();
            vacationDto.vacationDay = curr.getVacationDay();
            vacationDto.holiday = curr.isHoliday();
            vacationDtos.add(vacationDto);
        }
        return vacationDtos;
    }
}
