package com.henning.vacpla.business;

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

    public List<Date> getVacationDays() {
        return vacationDays;
    }

    public void setVacationDays(List<Date> vacationDays) {
        this.vacationDays = vacationDays;
    }
}
