package com.henning.vacpla.domain.vacation;

import com.henning.vacpla.domain.vacationRequest.VacationRequestEntity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "vacation")
public class VacationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vacation_id")
    private long vacationId;

    @ManyToOne
    @JoinColumn(name = "vacation_request_id", nullable = false)
    private VacationRequestEntity vacationRequest;

    @Column(name = "vac_from")
    private Date from;

    @Column(name = "vac_to")
    private Date to;

    @Column(name = "vacation_count")
    private long vacationCount;

    public VacationEntity() {
    }

    public VacationEntity(VacationRequestEntity vacationRequest, Date from, Date to, long vacationCount) {
        this.vacationRequest = vacationRequest;
        this.from = from;
        this.to = to;
        this.vacationCount = vacationCount;
    }

    public VacationRequestEntity getVacationRequest() {
        return vacationRequest;
    }

    public void setVacationRequest(VacationRequestEntity vacationRequest) {
        this.vacationRequest = vacationRequest;
    }

    public Date getFrom() {
        return from;
    }

    public void setFrom(Date from) {
        this.from = from;
    }

    public Date getTo() {
        return to;
    }

    public void setTo(Date to) {
        this.to = to;
    }

    public long getVacationCount() {
        return vacationCount;
    }

    public void setVacationCount(long vacationCount) {
        this.vacationCount = vacationCount;
    }
}