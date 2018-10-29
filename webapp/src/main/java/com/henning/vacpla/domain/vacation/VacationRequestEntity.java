package com.henning.vacpla.domain.vacation;

import com.henning.vacpla.domain.user.UserEntity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity(name = "VacationRequestEntity")
@Table(name = "vacation_request")
public class VacationRequestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vacation_request_id")
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

    @OneToMany(fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL, mappedBy="vacation_request")
    private List<VacationEntity> xxxx = new ArrayList<VacationEntity>();

    public VacationRequestEntity(UserEntity uzer, Status status, Date approved, UserEntity approvedBy, List<VacationEntity> xxxx) {
        this.uzer = uzer;
        this.status = status;
        this.approved = approved;
        this.approvedBy = approvedBy;
        this.xxxx = xxxx;
    }

    public VacationRequestEntity() {
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

    public List<VacationEntity> getXxxx() {
        return xxxx;
    }

    public void setXxxx(List<VacationEntity> xxxx) {
        this.xxxx = xxxx;
    }
}
