package com.henning.vacpla.business.annual_leave;

import com.henning.vacpla.business.util.DateUtil;
import com.henning.vacpla.business.vacationRequest.AnnualLeaveDto;
import com.henning.vacpla.domain.annual_leave.AnnualLeaveEntity;
import com.henning.vacpla.domain.user.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnnualLeaveBusinessService {

    @Autowired
    private DateUtil dateUtil;

    public List<AnnualLeaveDto> getAnnualLeaveDtos(UserEntity userEntity) {
        List<AnnualLeaveDto> annualLeaveDtos = new ArrayList<>();
        List<AnnualLeaveEntity> annualLeaveEntities = userEntity.getAnnualLeaveEntityList();
        for (AnnualLeaveEntity leaveEntity : annualLeaveEntities) {
            AnnualLeaveDto dto = new AnnualLeaveDto();
            dto.setAnnual(Integer.toString(leaveEntity.getAnnual()));
            dto.setLeave(Integer.toString(leaveEntity.getLeave()));
            annualLeaveDtos.add(dto);
        }
        return annualLeaveDtos;
    }

    public List<AnnualLeaveEntity> getInitialAnnualLeave() {
        List<AnnualLeaveEntity> leaveEntities = new ArrayList<>();
        AnnualLeaveEntity leaveEntity = new AnnualLeaveEntity();
        leaveEntity.setAnnual(dateUtil.getCurrentYear());
        leaveEntity.setLeave(25);
        leaveEntities.add(leaveEntity);
        return leaveEntities;
    }

}
