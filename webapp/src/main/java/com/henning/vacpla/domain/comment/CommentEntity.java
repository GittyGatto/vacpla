package com.henning.vacpla.domain.comment;


import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.vacationRequest.VacationRequestEntity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity(name = "CommentEntity")
@Table(name = "comment")
public class CommentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private long vacationId;

    @ManyToOne
    @JoinColumn(name = "vacation_request_id", nullable = false)
    private VacationRequestEntity vacationRequest;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private UserEntity userId;

    @Column(name = "comment_text")
    private Date vacationDay;

    @Column(name = "comment_date")
    private Timestamp timestamp;

    public CommentEntity(VacationRequestEntity vacationRequest, UserEntity userId, Date vacationDay, Timestamp timestamp) {
        this.vacationRequest = vacationRequest;
        this.userId = userId;
        this.vacationDay = vacationDay;
        this.timestamp = timestamp;
    }

    public long getVacationId() {
        return vacationId;
    }

    public void setVacationId(long vacationId) {
        this.vacationId = vacationId;
    }

    public VacationRequestEntity getVacationRequest() {
        return vacationRequest;
    }

    public void setVacationRequest(VacationRequestEntity vacationRequest) {
        this.vacationRequest = vacationRequest;
    }

    public UserEntity getUserId() {
        return userId;
    }

    public void setUserId(UserEntity userId) {
        this.userId = userId;
    }

    public Date getVacationDay() {
        return vacationDay;
    }

    public void setVacationDay(Date vacationDay) {
        this.vacationDay = vacationDay;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
