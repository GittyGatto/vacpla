package com.henning.vacpla.domain.vacationRequest;

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

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity uzer;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private VacationRequestStatus vacationRequestStatus;

    @Column(name = "approved")
    private Date approved;

    @ManyToOne
    @JoinColumn(name = "approved_by_id", nullable = false)
    private UserEntity approvedBy;

    @OneToMany(cascade = ALL, mappedBy = "vacationRequest")
    private List<VacationEntity> vacationRequests;

    @OneToMany(cascade = ALL, mappedBy = "vacationRequest")
    private List<CommentEntity> comments;

    public VacationRequestEntity(){}

    public VacationRequestEntity(UserEntity uzer, VacationRequestStatus vacationRequestStatus, Date approved, UserEntity approvedBy, List<VacationEntity> vacationRequests, List<CommentEntity> comments) {
        this.uzer = uzer;
        this.vacationRequestStatus = vacationRequestStatus;
        this.approved = approved;
        this.approvedBy = approvedBy;
        this.vacationRequests = vacationRequests;
        this.comments = comments;
    }

    public long getVacationRequestId() {
        return vacationRequestId;
    }

    public void setVacationRequestId(long vacationRequestId) {
        this.vacationRequestId = vacationRequestId;
    }

    public UserEntity getUzer() {
        return uzer;
    }

    public void setUzer(UserEntity uzer) {
        this.uzer = uzer;
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

    public List<VacationEntity> getVacationRequests() {
        return vacationRequests;
    }

    public void setVacationRequests(List<VacationEntity> vacationRequests) {
        this.vacationRequests = vacationRequests;
    }

    public List<CommentEntity> getComments() {
        return comments;
    }

    public void setComments(List<CommentEntity> comments) {
        this.comments = comments;
    }
}
