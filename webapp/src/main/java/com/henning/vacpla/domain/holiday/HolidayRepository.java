package com.henning.vacpla.domain.holiday;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
public interface HolidayRepository extends JpaRepository<HolidayEntity, Long> {

    @Transactional
    List<HolidayEntity> findAll();
}
