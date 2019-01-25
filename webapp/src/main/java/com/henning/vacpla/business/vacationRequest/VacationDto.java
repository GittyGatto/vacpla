package com.henning.vacpla.business.vacationRequest;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class VacationDto {
    private String from;
    private String to;
    private long vacationCount;
    private String category;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public long getVacationCount() {
        return vacationCount;
    }

    public void setVacationCount(long vacationCount) {
        this.vacationCount = vacationCount;
    }
}
