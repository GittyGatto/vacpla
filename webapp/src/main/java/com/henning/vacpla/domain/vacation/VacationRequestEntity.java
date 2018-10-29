package com.henning.vacpla.domain.vacation;

import com.henning.vacpla.domain.user.UserEntity;

import javax.persistence.*;
import java.util.Date;

@Entity(name="VacationEntity")
@Table(name= "vacation")
public class VacationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long vacationId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity uzer;

    @Column(name = "vacation_day")
    private Date vacationDay;

    public VacationEntity(UserEntity uzer, Date vacationDay) {
        this.uzer = uzer;
        this.vacationDay = vacationDay;
    }

    public VacationEntity() {}

    public long getVacationId() {
        return vacationId;
    }

    public UserEntity getUzer() {
        return uzer;
    }

    public void setUzer(UserEntity uzer) {
        this.uzer = uzer;
    }

    public Date getVacationDay() {
        return vacationDay;
    }

    public void setVacationDay(Date vacationDay) {
        this.vacationDay = vacationDay;
    }
}
