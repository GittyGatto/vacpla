package com.henning.vacpla.domain.annual_leave;

import com.henning.vacpla.domain.user.UserEntity;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "annual_leave")
public class AnnualLeaveEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "annual")
    private int annual;

    @Column(name = "leave")
    private int leave;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity uzer;
}
