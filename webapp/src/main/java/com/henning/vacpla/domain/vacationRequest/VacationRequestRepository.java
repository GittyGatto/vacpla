package com.henning.vacpla.domain.vacationRequest;

import com.henning.vacpla.controllers.vacation.VacationRequest;
import com.henning.vacpla.domain.user.UserEntity;
import com.henning.vacpla.domain.vacation.VacationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface VacationRequestRepository extends JpaRepository<VacationRequestEntity, Long> {

    @Transactional
    Optional<List<VacationRequestEntity>> findByUzer(Optional<UserEntity> userEntity);
}