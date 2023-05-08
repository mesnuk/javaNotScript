package com.mesnuk.course.chair.repository;

import com.mesnuk.course.chair.domain.Chair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChairRepository extends JpaRepository<Chair, Long> {

}
