package com.henning.vacpla.business.holiday;

import com.henning.vacpla.domain.holiday.HolidayEntity;
import com.henning.vacpla.domain.holiday.HolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class GetHolidaysBusinessService {

    private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    private HolidayRepository holidayRepository;

    @Autowired
    public GetHolidaysBusinessService(HolidayRepository holidayRepository) {
        this.holidayRepository = holidayRepository;
    }

    public List<HolidayDto> getHolidays() {
        List<HolidayEntity> holidayEntities = holidayRepository.findAll();
        return toHolidayDtos(holidayEntities);
    }

    private List<HolidayDto> toHolidayDtos(List<HolidayEntity> holidayEntities) {
        List<HolidayDto> result = new ArrayList<>();
        for (HolidayEntity curr : holidayEntities) {
            HolidayDto dto = toHolidayDto(curr);
            result.add(dto);
        }
        return result;
    }

    private HolidayDto toHolidayDto(HolidayEntity curr) {
        HolidayDto dto = new HolidayDto();
        dto.holiday = sdf.format(curr.getHoliday());
        return dto;
    }
}
