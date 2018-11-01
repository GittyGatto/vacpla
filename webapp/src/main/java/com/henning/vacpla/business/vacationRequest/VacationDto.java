package com.henning.vacpla.business.vacationRequest;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.henning.vacpla.controllers.vacation.JsonDateSerializer;

import java.util.Date;
import java.util.List;

public class VacationDto {
    private List<VacationRequestDto> vacationDays;
}
