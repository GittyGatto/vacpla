package com.henning.vacpla.business.request;

import com.henning.vacpla.business.util.DateUtil;
import com.henning.vacpla.business.request.dtos.RequestDto;
import com.henning.vacpla.domain.vacation_request.VacationRequestEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RequestDtoBusinessService {

    @Autowired
    private DateUtil dateUtil;

    public HashMap<Integer, List<RequestDto>> fillRequestDtos(List<VacationRequestEntity> vacationRequestEntities) {
        HashMap<Integer, List<RequestDto>> vacationRequests = new HashMap<>();
        HashSet<Integer> hashKeys = getHashKeys(vacationRequestEntities);

        for (Integer key : hashKeys) {
            List<RequestDto> requestDtoList = new ArrayList<>();
            for (VacationRequestEntity curr : vacationRequestEntities) {
                if (getRequestYear(curr).equals(key)) {
                    RequestDto requestDto = fillRequestDto(curr);
                    requestDtoList.add(requestDto);
                    vacationRequests.put(key, requestDtoList);
                }
            }
            Collections.sort(requestDtoList, Collections.reverseOrder());
        }
        return vacationRequests;
    }

    public RequestDto fillRequestDto(VacationRequestEntity requestEntity) {
        RequestDto requestDto = new RequestDto();
        requestDto.setVacationRequestStatus(requestEntity.getVacationRequestStatus().toString());
        requestDto.setRequested(dateUtil.sdf.format(requestEntity.getRequested()));
        if (requestEntity.getApproved() != null) {
            requestDto.setApproved(requestEntity.getApproved().toString());
            requestDto.setApprovedBy(requestEntity.getApprovedBy().getUserName());
        }
        requestDto.setOwner(requestEntity.getUzer().getUserName());
        requestDto.setUuid(requestEntity.getUuid());
        requestDto.setFrom(dateUtil.sdf.format(requestEntity.getFrom()));
        requestDto.setTo(dateUtil.sdf.format(requestEntity.getTo()));
        requestDto.setVacationCount(String.valueOf(requestEntity.getVacationCount()));
        requestDto.setCategory(requestEntity.getVacationCategory().toString());
        return requestDto;
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
        Calendar calendar = new GregorianCalendar();
        calendar.setTime(curr.getRequested());
        return calendar.get(Calendar.YEAR);
    }
}
