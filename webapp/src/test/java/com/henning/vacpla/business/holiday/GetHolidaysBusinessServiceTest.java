package com.henning.vacpla.business.holiday;

import com.henning.vacpla.business.util.DateUtil;
import com.henning.vacpla.domain.holiday.HolidayEntity;
import com.henning.vacpla.domain.holiday.HolidayRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


@RunWith(MockitoJUnitRunner.class)
public class GetHolidaysBusinessServiceTest {

    @InjectMocks
    GetHolidaysBusinessService getHolidaysBusinessService;

    @Mock
    HolidayRepository holidayRepository;

    String dBTestDate = "2021-12-24";

    @Test
    public void happyPath() {
        List<HolidayEntity> testHolidays = createTestHolidays();
        when(holidayRepository.findAll()).thenReturn(testHolidays);

        List<HolidayDto> holidays = getHolidaysBusinessService.getHolidays();

        assertEquals(1, holidays.size(), "holiday list is empty");
        assertEquals("2021-12-24", holidays.get(0).holiday, "getHolidays is broken");
    }

    private List<HolidayEntity> createTestHolidays() {
        DateUtil dateUtil = new DateUtil();
        List<HolidayEntity> holidayEntities = new ArrayList<>();

        HolidayEntity entity = new HolidayEntity();
        entity.setId(1l);
        entity.setHoliday(dateUtil.parseDate(dBTestDate, DateUtil.dbSdf));
        holidayEntities.add(entity);
        return holidayEntities;
    }

}