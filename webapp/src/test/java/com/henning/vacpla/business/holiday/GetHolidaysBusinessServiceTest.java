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
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


@RunWith(MockitoJUnitRunner.class)
public class GetHolidaysBusinessServiceTest {

    @InjectMocks
    GetHolidaysBusinessService getHolidaysBusinessService = new GetHolidaysBusinessService();

    @Mock
    HolidayRepository holidayRepository;

    String testDate = "2021-12-31";

    @Test
    public void happyPath() {
        List<HolidayEntity> testHolidays = createTestHolidays();
        when(holidayRepository.findAll()).thenReturn(testHolidays);

        List<HolidayDto> holidays = getHolidaysBusinessService.getHolidays();

        assertEquals(1, holidays.size(), "holiday list is empty");
        assertEquals("2021-12-31", holidays.get(0).holiday, "getHolidays is broken");
    }

    private List<HolidayEntity> createTestHolidays() {
        DateUtil dateUtil = new DateUtil();
        Date newYearsEve = dateUtil.parseDate(testDate);
        List<HolidayEntity> holidayEntities = new ArrayList<>();

        HolidayEntity entity = new HolidayEntity();
        entity.setId(1l);
        entity.setHoliday(newYearsEve);
        holidayEntities.add(entity);
        return holidayEntities;
    }

}