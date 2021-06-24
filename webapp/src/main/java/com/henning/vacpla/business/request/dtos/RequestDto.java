package com.henning.vacpla.business.request.dtos;

import lombok.Data;

import java.util.List;

@Data
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

    @Override
    public int compareTo(RequestDto o) {
        return getRequested().compareTo(o.getRequested());
    }
}
