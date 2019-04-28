package com.henning.vacpla.domain.annual_leave;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AnnualLeaveRepository extends JpaRepository<AnnualLeaveEntity, Long> {

}
