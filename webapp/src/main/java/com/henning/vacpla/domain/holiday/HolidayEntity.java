package com.henning.vacpla.domain.holiday;

import com.henning.vacpla.domain.user.Role;
import com.henning.vacpla.domain.vacationRequest.VacationRequestEntity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

@Entity
@Table(name = "holiday")
public class HolidayEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "holiday")
    private Date holiday;

    public Date getHoliday() {
        return holiday;
    }
}
