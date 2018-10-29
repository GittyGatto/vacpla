package com.henning.vacpla.domain.vacation;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "VacationEntity")
@Table(name = "vacation")
public class VacationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vacation_id")
    private long vacationId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "vacation_request_id")
    private VacationRequestEntity vacationRequest;

    @Column(name = "vacation_day")
    private Date vacationDay;

    @Column(name = "holiday")
    private boolean holiday;

    public VacationEntity() {
    }

    public VacationEntity(VacationRequestEntity vacationRequest, Date vacationDay, boolean holiday) {
        this.vacationRequest = vacationRequest;
        this.vacationDay = vacationDay;
        this.holiday = holiday;
    }

    public VacationRequestEntity getVacationRequest() {
        return vacationRequest;
    }

    public void setVacationRequest(VacationRequestEntity vacationRequest) {
        this.vacationRequest = vacationRequest;
    }

    public Date getVacationDay() {
        return vacationDay;
    }

    public void setVacationDay(Date vacationDay) {
        this.vacationDay = vacationDay;
    }

    public boolean isHoliday() {
        return holiday;
    }

    public void setHoliday(boolean holiday) {
        this.holiday = holiday;
    }
}

