package com.henning.vacpla.business.viewRequest;

import com.henning.vacpla.business.vacationRequest.VacationRequestDto;

import java.util.HashMap;
import java.util.List;

public class ViewRequestDto {
    public VacationRequestDto request;
    public int totalVacation;
    public HashMap<Integer, List<VacationRequestDto>> vacationRequests;
}
