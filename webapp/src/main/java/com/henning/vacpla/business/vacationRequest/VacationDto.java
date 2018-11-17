package com.henning.vacpla.business.vacationRequest;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class VacationDto {
    private Date from;
    private Date to;
    private long vacationCount;
    private String category;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    public Date getFrom() {
        return from;
    }

    public void setFrom(Date from) {
        this.from = from;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    public Date getTo() {
        return to;
    }

    public void setTo(Date to) {
        this.to = to;
    }

    public long getVacationCount() {
        return vacationCount;
    }

    public void setVacationCount(long vacationCount) {
        this.vacationCount = vacationCount;
    }
}
