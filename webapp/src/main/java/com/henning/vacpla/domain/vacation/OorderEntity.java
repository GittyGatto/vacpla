package com.henning.vacpla.domain.vacation;

import com.henning.vacpla.domain.user.UserEntity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

@Entity(name = "OorderEntity")
@Table(name = "oorder")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "oorder_id")
    private long vacationRequestId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity uzer;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Column(name = "approved")
    private Date approved;

    @Column(name = "approved_by_id")
    private UserEntity approvedBy;

    @OneToMany(cascade = ALL, mappedBy = "vacation_request")
    private List<VacationEntity> vacationRequests = new ArrayList<VacationEntity>();

    public OrderEntity(UserEntity uzer, Status status, Date approved, UserEntity approvedBy, List<VacationEntity> vacationRequests) {
        this.uzer = uzer;
        this.status = status;
        this.approved = approved;
        this.approvedBy = approvedBy;
        this.vacationRequests = vacationRequests;
    }

    public OrderEntity() {
    }

    public UserEntity getUzer() {
        return uzer;
    }

    public void setUzer(UserEntity uzer) {
        this.uzer = uzer;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Date getApproved() {
        return approved;
    }

    public void setApproved(Date approved) {
        this.approved = approved;
    }

    public UserEntity getApprovedBy() {
        return approvedBy;
    }

    public void setApprovedBy(UserEntity approvedBy) {
        this.approvedBy = approvedBy;
    }

    public List<VacationEntity> getVacationRequests() {
        return vacationRequests;
    }

    public void setVacationRequests(List<VacationEntity> vacationRequests) {
        this.vacationRequests = vacationRequests;
    }
}
