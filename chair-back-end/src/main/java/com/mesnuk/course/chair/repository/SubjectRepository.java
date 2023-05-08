package com.mesnuk.course.chair.repository;

import com.mesnuk.course.chair.domain.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
}
