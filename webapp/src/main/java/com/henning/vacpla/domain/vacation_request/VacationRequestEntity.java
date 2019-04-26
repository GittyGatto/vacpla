package com.henning.vacpla.domain.vacation_request;

import com.henning.vacpla.domain.comment.CommentEntity;
import com.henning.vacpla.domain.user.UserEntity;

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

    @Column(name = "vacation_request_uuid")
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

    @Column(name = "vac_from")
    private Date from;

    @Column(name = "vac_to")
    private Date to;

    @Column(name = "vacation_count")
    private long vacationCount;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private VacationCategory vacationCategory;

    @ManyToOne
    @JoinColumn(name = "approved_by_id")
    private UserEntity approvedBy;

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

    public List<CommentEntity> getComments() {
        return comments;
    }

    public void setComments(List<CommentEntity> comments) {
        this.comments = comments;
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

    public VacationCategory getVacationCategory() {
        return vacationCategory;
    }

    public void setVacationCategory(VacationCategory vacationCategory) {
        this.vacationCategory = vacationCategory;
    }
}
