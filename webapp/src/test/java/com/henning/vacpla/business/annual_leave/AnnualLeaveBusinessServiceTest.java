package com.henning.vacpla.business.annual_leave;

import com.henning.vacpla.business.request.dtos.AnnualLeaveDto;
import com.henning.vacpla.business.util.DateUtil;
import com.henning.vacpla.domain.annual_leave.AnnualLeaveEntity;
import com.henning.vacpla.domain.annual_leave.AnnualLeaveRepository;
import com.henning.vacpla.domain.user.UserEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class AnnualLeaveBusinessServiceTest {

    @InjectMocks
    AnnualLeaveBusinessService annualLeaveBusinessService;
    @Mock
    DateUtil dateUtil;
    @Mock
    AnnualLeaveRepository annualLeaveRepository;

    @Test
    public void happyPath_getAnnualLeave() {

        UserEntity userEntity = createTestUserEntity();

        List<AnnualLeaveDto> annualLeaveDtos = annualLeaveBusinessService.getAnnualLeaveDtos(userEntity);

        assertEquals(1, annualLeaveDtos.size(), "annualLeaveDtos List is empty");
        assertEquals("2021", annualLeaveDtos.get(0).getAnnual(), "annualLeaveDto annual is wrong");
        assertEquals("25", annualLeaveDtos.get(0).getLeave(), "annualLeaveDto leave is wrong");
    }

    @Test
    public void happyPath_setInitialAnnualLeave() {

        UserEntity userEntity = createTestUserEntity();

        when(dateUtil.getCurrentYear()).thenReturn(2021);
        when(annualLeaveRepository.save(Mockito.any(AnnualLeaveEntity.class)))
                .thenAnswer(i -> i.getArguments()[0]);

        annualLeaveBusinessService.setInitialAnnualLeave(userEntity, 50);

        assertEquals(2021, userEntity.getAnnualLeaveEntityList().get(0).getAnnual(), "annual is wrong");
        assertEquals(25, userEntity.getAnnualLeaveEntityList().get(0).getLeave(), "leave is wrong");
    }

    private UserEntity createTestUserEntity() {
        UserEntity userEntity = new UserEntity();
        createAnnualLeaveEntities(userEntity);
        return userEntity;
    }

    private void createAnnualLeaveEntities(UserEntity userEntity) {
        List<AnnualLeaveEntity> annualLeaveEntities = new ArrayList<>();
        AnnualLeaveEntity annualLeaveEntity = new AnnualLeaveEntity();
        annualLeaveEntity.setAnnual(2021);
        annualLeaveEntity.setLeave(25);
        annualLeaveEntities.add(annualLeaveEntity);
        userEntity.setAnnualLeaveEntityList(annualLeaveEntities);
    }
}