package com.henning.vacpla.business.request.dtos;

import java.util.List;

public class RequestDto implements Comparable<RequestDto> {
    private String uuid;
    private String owner;
    private String vacationRequestStatus;
    private String requested;
    private String approved;
    private String approvedBy;
    private String from;
    private String to;
    private String vacationCount;
    private String category;
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

    public String getRequested() {
        return requested;
    }

    public void setRequested(String requested) {
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

    public List<CommentDto> getComments() {
        return comments;
    }

    public void setComments(List<CommentDto> comments) {
        this.comments = comments;
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

    public String getVacationCount() {
        return vacationCount;
    }

    public void setVacationCount(String vacationCount) {
        this.vacationCount = vacationCount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public int compareTo(RequestDto o) {
        return getRequested().compareTo(o.getRequested());
    }
}
