package com.henning.vacpla.business.request.dtos;

import lombok.Data;

import java.util.HashMap;
import java.util.List;

@Data
public class OpenRequestsDto {
    public HashMap<Integer, List<RequestDto>> vacationRequests;
}
