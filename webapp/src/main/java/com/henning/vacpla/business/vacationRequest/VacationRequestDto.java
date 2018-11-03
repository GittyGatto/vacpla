package com.henning.vacpla.business.vacationRequest;

import java.util.Date;
import java.util.List;

public class VacationRequestDto {
    public String vacationRequestStatus;
    public Date requested;
    public String approved;
    public String approvedBy;
    public List<VacationDto> vacations;
    public List<CommentDto> comments;
}
