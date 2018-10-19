package com.henning.vacpla.business;

import java.util.Date;
import java.util.List;

public class VacationDto {
    private int totalVacation;
    private List<Date> userVacations;

    public VacationDto(int totalVacation, List<Date> userVacations) {
        this.totalVacation = totalVacation;
        this.userVacations = userVacations;
    }

    public int getTotalVacation() {
        return totalVacation;
    }

    public void setTotalVacation(int totalVacation) {
        this.totalVacation = totalVacation;
    }

    public List<Date> getUserVacations() {
        return userVacations;
    }

    public void setUserVacations(List<Date> userVacations) {
        this.userVacations = userVacations;
    }
}
