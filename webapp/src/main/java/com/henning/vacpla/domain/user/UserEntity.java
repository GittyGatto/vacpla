package com.henning.vacpla.domain.user;

import com.henning.vacpla.business.role.Role;
import com.henning.vacpla.domain.annual_leave.AnnualLeaveEntity;
import com.henning.vacpla.domain.vacation_request.VacationRequestEntity;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

@Data
@Entity
@Table(name = "uzer")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Column(name = "entry")
    private Date entry;

    @Column(name = "exit")
    private Date exit;

    @OneToMany(cascade = ALL, mappedBy = "uzer")
    private List<VacationRequestEntity> vacationRequestEntityList;

    @OneToMany(cascade = ALL, mappedBy = "uzer")
    private List<AnnualLeaveEntity> annualLeaveEntityList;

    public UserEntity (){}

    public UserEntity(String userName, String password, Role role, Date entry, Date exit, List<VacationRequestEntity> vacationRequestEntityList, List<AnnualLeaveEntity> annualLeaveEntityList) {
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.entry = entry;
        this.exit = exit;
        this.vacationRequestEntityList = vacationRequestEntityList;
        this.annualLeaveEntityList = annualLeaveEntityList;
    }

    public UserEntity(String userName, String password, Role role, Date entry) {
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.entry = entry;
    }
}
