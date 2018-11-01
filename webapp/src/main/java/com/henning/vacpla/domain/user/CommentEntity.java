package com.henning.vacpla.domain.user;


import com.henning.vacpla.domain.vacation.OorderEntity;

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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "order_id")
    private OorderEntity vacationRequest;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private UserEntity userId;

    @Column(name = "comment_text")
    private Date vacationDay;

    @Column(name = "comment_date")
    private Timestamp timestamp;

    public CommentEntity(UserEntity userId, Date vacationDay, Timestamp timestamp) {
        this.userId = userId;
        this.vacationDay = vacationDay;
        this.timestamp = timestamp;
    }

    public OorderEntity getVacationRequest() {
        return vacationRequest;
    }

    public void setVacationRequest(OorderEntity vacationRequest) {
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
