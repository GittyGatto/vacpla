package com.henning.vacpla.domain.vacation;

import com.henning.vacpla.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface VacationRepository extends JpaRepository<VacationEntity, Long> {

    @Transactional
    Optional<List<VacationEntity>> findByUzer(Optional<UserEntity> userEntity);
}
