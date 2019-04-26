package com.henning.vacpla.domain.vacation_request;

import com.henning.vacpla.domain.comment.CommentEntity;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.vacation.VacationEntity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

@Entity
@Table(name = "vacation_request")
public class VacationRequestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vacation_request_id")
    private long vacationRequestId;

    @Column(name="vacation_request_uuid")
    private String uuid;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity uzer;

    @Column(name = "requested")
    private Date requested;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private VacationRequestStatus vacationRequestStatus;

    @Column(name = "approved")
    private Date approved;

    @ManyToOne
    @JoinColumn(name = "approved_by_id")
    private UserEntity approvedBy;

    @OneToMany(cascade = ALL, mappedBy = "vacationRequest")
    private List<VacationEntity> vacations;

    @OneToMany(cascade = ALL, mappedBy = "vacationRequest")
    private List<CommentEntity> comments;

    public VacationRequestEntity() {
    }

    public long getVacationRequestId() {
        return vacationRequestId;
    }

    public void setVacationRequestId(long vacationRequestId) {
        this.vacationRequestId = vacationRequestId;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public UserEntity getUzer() {
        return uzer;
    }

    public void setUzer(UserEntity uzer) {
        this.uzer = uzer;
    }

    public Date getRequested() {
        return requested;
    }

    public void setRequested(Date requested) {
        this.requested = requested;
    }

    public VacationRequestStatus getVacationRequestStatus() {
        return vacationRequestStatus;
    }

    public void setVacationRequestStatus(VacationRequestStatus vacationRequestStatus) {
        this.vacationRequestStatus = vacationRequestStatus;
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

    public List<VacationEntity> getVacations() {
        return vacations;
    }

    public void setVacations(List<VacationEntity> vacations) {
        this.vacations = vacations;
    }

    public List<CommentEntity> getComments() {
        return comments;
    }

    public void setComments(List<CommentEntity> comments) {
        this.comments = comments;
    }
}
