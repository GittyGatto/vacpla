package com.henning.vacpla.business.vacationRequest;

import java.util.HashMap;
import java.util.List;

public class VacationOverviewDto {
    private List<AnnualLeaveDto> annualLeaves;
    private HashMap<Integer, List<VacationRequestDto>> vacationRequests;

    public List<AnnualLeaveDto> getAnnualLeaves() {
        return annualLeaves;
    }

    public void setAnnualLeaves(List<AnnualLeaveDto> annualLeaves) {
        this.annualLeaves = annualLeaves;
    }

    public HashMap<Integer, List<VacationRequestDto>> getVacationRequests() {
        return vacationRequests;
    }

    public void setVacationRequests(HashMap<Integer, List<VacationRequestDto>> vacationRequests) {
        this.vacationRequests = vacationRequests;
    }
}
