package com.henning.vacpla.domain.vacation_request;

import com.henning.vacpla.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface VacationRequestRepository extends JpaRepository<VacationRequestEntity, Long> {

    @Transactional
    Optional<List<VacationRequestEntity>> findByUzer(Optional<UserEntity> userEntity);

    @Transactional
    VacationRequestEntity save(VacationRequestEntity vacationRequestEntity);

    @Transactional
    @Query("SELECT r FROM VacationRequestEntity r WHERE status = 'REQUESTED' AND NOT USER_ID = :userId")
    Optional<List<VacationRequestEntity>> findOpenRequests(@Param("userId") long userId);

    @Transactional
    //@Query("Select r From VacationRequestEntity r Where vacation_request_uuid = :uuid")
    //Optional<VacationRequestEntity> findByUuid(@Param("uuid") String uuid);
    Optional<VacationRequestEntity> findByUuid(String uuid);



}
