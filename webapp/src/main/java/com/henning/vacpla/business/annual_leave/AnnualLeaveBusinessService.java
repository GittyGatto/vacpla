package com.henning.vacpla.business.annual_leave;

import com.henning.vacpla.business.request.dtos.AnnualLeaveDto;
import com.henning.vacpla.business.util.DateUtil;
import com.henning.vacpla.domain.annual_leave.AnnualLeaveEntity;
import com.henning.vacpla.domain.annual_leave.AnnualLeaveRepository;
import com.henning.vacpla.domain.user.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnnualLeaveBusinessService {

    private DateUtil dateUtil;
    private AnnualLeaveRepository annualLeaveRepository;

    @Autowired
    public AnnualLeaveBusinessService(DateUtil dateUtil, AnnualLeaveRepository annualLeaveRepository) {
        this.dateUtil = dateUtil;
        this.annualLeaveRepository = annualLeaveRepository;
    }


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

    public void setInitialAnnualLeave(UserEntity userEntity, Integer initLeave) {
        List<AnnualLeaveEntity> leaveEntities = new ArrayList<>();
        AnnualLeaveEntity leaveEntity = new AnnualLeaveEntity();
        leaveEntity.setAnnual(dateUtil.getCurrentYear());
        leaveEntity.setUzer(userEntity);
        leaveEntity.setLeave(initLeave);
        leaveEntities.add(leaveEntity);
        annualLeaveRepository.save(leaveEntity);
    }
}
