package com.henning.vacpla.business.request.dtos;

import lombok.Data;

import java.util.HashMap;
import java.util.List;

@Data
public class OverviewDto {
    private List<AnnualLeaveDto> annualLeaves;
    private HashMap<Integer, List<RequestDto>> vacationRequests;
}
