package com.henning.vacpla.business.vacationRequest;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class VacationDto {
    private Date vacationDay;
    private boolean holiday;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    public Date getVacationDay() {
        return vacationDay;
    }

    public void setVacationDay(Date vacationDay) {
        this.vacationDay = vacationDay;
    }

    public boolean isHoliday() {
        return holiday;
    }

    public void setHoliday(boolean holiday) {
        this.holiday = holiday;
    }
}
