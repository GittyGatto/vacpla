package com.henning.vacpla.domain.vacation_request;

import com.henning.vacpla.domain.comment.CommentEntity;
import com.henning.vacpla.domain.user.UserEntity;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

@Data
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
}
