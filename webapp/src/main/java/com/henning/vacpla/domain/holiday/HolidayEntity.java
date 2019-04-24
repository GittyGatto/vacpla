package com.henning.vacpla.domain.holiday;

import javax.persistence.*;
import java.util.Date;

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
