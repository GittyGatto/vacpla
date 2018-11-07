package com.henning.vacpla.business.vacationRequest;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.henning.vacpla.controllers.vacation.JsonDateSerializer;

import java.util.Date;
import java.util.List;

public class VacationRequestDto {
    private String vacationRequestStatus;
    private Date requested;
    private String approved;
    private String approvedBy;
    private List<VacationDto> vacations;
    private List<CommentDto> comments;

    public String getVacationRequestStatus() {
        return vacationRequestStatus;
    }

    public void setVacationRequestStatus(String vacationRequestStatus) {
        this.vacationRequestStatus = vacationRequestStatus;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    public Date getRequested() {
        return requested;
    }

    public void setRequested(Date requested) {
        this.requested = requested;
    }

    public String getApproved() {
        return approved;
    }

    public void setApproved(String approved) {
        this.approved = approved;
    }

    public String getApprovedBy() {
        return approvedBy;
    }

    public void setApprovedBy(String approvedBy) {
        this.approvedBy = approvedBy;
    }

    public List<VacationDto> getVacations() {
        return vacations;
    }

    public void setVacations(List<VacationDto> vacations) {
        this.vacations = vacations;
    }

    public List<CommentDto> getComments() {
        return comments;
    }

    public void setComments(List<CommentDto> comments) {
        this.comments = comments;
    }
}
