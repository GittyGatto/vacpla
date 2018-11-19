package com.henning.vacpla.business.vacationRequest;

import com.henning.vacpla.business.util.DateUtil;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.user.UserRepository;
import com.henning.vacpla.domain.vacation.VacationCategory;
import com.henning.vacpla.domain.vacation.VacationEntity;
import com.henning.vacpla.domain.vacationRequest.VacationRequestEntity;
import com.henning.vacpla.domain.vacationRequest.VacationRequestRepository;
import com.henning.vacpla.domain.vacationRequest.VacationRequestStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class GetUserVacationBusinessService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VacationRequestRepository vacationRequestRepository;

    @Autowired
    private DateUtil dateUtil;

    public VacationOverviewDto getUserVacation(String userName) {
        UserEntity userEntity = getUserEntity(userName);
        List<VacationRequestEntity> vacationRequestEntities = vacationRequestRepository.findByUzer(Optional.ofNullable(userEntity)).orElse(null);
        return fillVacationOverviewDto(userEntity, vacationRequestEntities);
    }

    public VacationOverviewDto saveNewVacationRequest(String userName, String[] range, long vacationDays) {
        UserEntity userEntity = getUserEntity(userName);
        VacationRequestEntity vacRequest = new VacationRequestEntity();
        vacRequest.setUzer(userEntity);
        vacRequest.setRequested(new Date());
        vacRequest.setVacationRequestStatus(VacationRequestStatus.REQUESTED);

        List<VacationEntity> vacationEntities = new ArrayList<>();
        VacationEntity vacation = new VacationEntity();

        vacation.setFrom(dateUtil.parseDate(range[0]));
        vacation.setTo(dateUtil.parseDate(range[1]));
        vacation.setVacationCount(vacationDays);
        vacation.setVacationCategory(VacationCategory.PAID);
        vacation.setVacationRequest(vacRequest);
        vacationEntities.add(vacation);

        vacRequest.setVacations(vacationEntities);

        VacationRequestEntity savedEntity = vacationRequestRepository.save(vacRequest);

        List<VacationRequestEntity> vacationRequestEntities = new ArrayList<>();
        vacationRequestEntities.add(savedEntity);

        return fillVacationOverviewDto(userEntity, vacationRequestEntities);
    }

    private UserEntity getUserEntity(String userName) {
        return userRepository.findByUserName(userName).orElseThrow(() -> new UsernameNotFoundException("No user found with username " + userName));
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
            Collections.sort(vacationRequestDtoList, Collections.reverseOrder());
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
            vacationDto.setFrom(curr.getFrom());
            vacationDto.setTo(curr.getTo());
            vacationDto.setVacationCount(curr.getVacationCount());
            vacationDto.setCategory(curr.getVacationCategory().toString());
            vacationDtos.add(vacationDto);
        }
        return vacationDtos;
    }
}
