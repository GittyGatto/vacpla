package com.henning.vacpla.domain.comment;


import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.vacation_request.VacationRequestEntity;
import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Data
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
}
