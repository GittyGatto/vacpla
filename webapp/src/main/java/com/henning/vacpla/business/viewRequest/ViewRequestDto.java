package com.henning.vacpla.business.viewRequest;

import com.henning.vacpla.business.vacationRequest.AnnualLeaveDto;
import com.henning.vacpla.business.vacationRequest.VacationRequestDto;

import java.util.HashMap;
import java.util.List;

public class ViewRequestDto {
    private VacationRequestDto request;
    private List<AnnualLeaveDto> annualLeaves;
    private HashMap<Integer, List<VacationRequestDto>> vacationRequests;

    public VacationRequestDto getRequest() {
        return request;
    }

    public void setRequest(VacationRequestDto request) {
        this.request = request;
    }

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
