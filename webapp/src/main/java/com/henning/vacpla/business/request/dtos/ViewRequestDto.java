package com.henning.vacpla.business.request.dtos;

import java.util.HashMap;
import java.util.List;

public class ViewRequestDto {
    private RequestDto request;
    private List<AnnualLeaveDto> annualLeaves;
    private HashMap<Integer, List<RequestDto>> vacationRequests;

    public RequestDto getRequest() {
        return request;
    }

    public void setRequest(RequestDto request) {
        this.request = request;
    }

    public List<AnnualLeaveDto> getAnnualLeaves() {
        return annualLeaves;
    }

    public void setAnnualLeaves(List<AnnualLeaveDto> annualLeaves) {
        this.annualLeaves = annualLeaves;
    }

    public HashMap<Integer, List<RequestDto>> getVacationRequests() {
        return vacationRequests;
    }

    public void setVacationRequests(HashMap<Integer, List<RequestDto>> vacationRequests) {
        this.vacationRequests = vacationRequests;
    }
}
