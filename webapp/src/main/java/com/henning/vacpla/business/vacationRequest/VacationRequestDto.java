package com.henning.vacpla.business.vacationRequest;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.henning.vacpla.controllers.vacation.JsonDateSerializer;

import java.util.Date;
import java.util.List;

public class VacationRequestDto implements Comparable<VacationRequestDto> {
    private String uuid;
    private String owner;
    private String vacationRequestStatus;
    private Date requested;
    private String approved;
    private String approvedBy;
    private List<VacationDto> vacations;
    private List<CommentDto> comments;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getVacationRequestStatus() {
        return vacationRequestStatus;
    }

    public void setVacationRequestStatus(String vacationRequestStatus) {
        this.vacationRequestStatus = vacationRequestStatus;
    }

    public Date getRequested() {
        return requested;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    public void setRequested(Date requested) {
        this.requested = requested;
    }

    public String getApproved() {
        return approved;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
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

    @Override
    public int compareTo(VacationRequestDto o) {
        return getRequested().compareTo(o.getRequested());
    }
}
