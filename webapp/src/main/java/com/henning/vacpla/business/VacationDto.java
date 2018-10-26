package com.henning.vacpla.business;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.henning.vacpla.controllers.vacation.JsonDateSerializer;

import java.util.Date;
import java.util.List;

public class VacationDto {
    private int totalVacation;
    private List<Date> vacationDays;

    public VacationDto(int totalVacation, List<Date> vacationDays) {
        this.totalVacation = totalVacation;
        this.vacationDays = vacationDays;
    }

    public int getTotalVacation() {
        return totalVacation;
    }

    public void setTotalVacation(int totalVacation) {
        this.totalVacation = totalVacation;
    }

    @JsonSerialize(contentUsing = JsonDateSerializer.class)
    public List<Date> getVacationDays() {
        return vacationDays;
    }

    public void setVacationDays(List<Date> vacationDays) {
        this.vacationDays = vacationDays;
    }
}
