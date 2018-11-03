package com.henning.vacpla.business.vacationRequest;

import java.util.HashMap;
import java.util.List;

public class VacationOverviewDto {
    public String userName;
    public int totalVacation;
    public HashMap<Integer, List<VacationRequestDto>> vacationRequests;
}
