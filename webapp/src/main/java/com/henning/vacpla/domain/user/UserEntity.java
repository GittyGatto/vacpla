package com.henning.vacpla.domain.user;

import com.henning.vacpla.domain.role.Role;
import com.henning.vacpla.domain.vacationRequest.VacationRequestEntity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

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

    @Column(name = "total_vacation")
    private int totalVacation;

    @Column(name = "entry")
    private Date entry;

    @Column(name = "exit")
    private Date exit;

    @OneToMany(cascade = ALL, mappedBy = "uzer")
    private List<VacationRequestEntity> vacationRequestEntityList;

    public long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public int getTotalVacation() {
        return totalVacation;
    }

    public void setTotalVacation(int totalVacation) {
        this.totalVacation = totalVacation;
    }

    public Date getEntry() {
        return entry;
    }

    public void setEntry(Date entry) {
        this.entry = entry;
    }

    public Date getExit() {
        return exit;
    }

    public void setExit(Date exit) {
        this.exit = exit;
    }

    public List<VacationRequestEntity> getVacationRequestEntityList() {
        return vacationRequestEntityList;
    }

    public void setVacationRequestEntityList(List<VacationRequestEntity> vacationRequestEntityList) {
        this.vacationRequestEntityList = vacationRequestEntityList;
    }
}
