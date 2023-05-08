package com.mesnuk.course.chair.controller;

import com.mesnuk.course.chair.domain.Speciality;
import com.mesnuk.course.chair.domain.Subject;
import com.mesnuk.course.chair.repository.SpecialityRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/specialities")
public class SpecialityController {

    @Autowired
    private SpecialityRepository specialityRepository;

    @GetMapping
    public List<Speciality> getAllSpecialities() {
        return specialityRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Speciality> getSpecialityById(@PathVariable Long id) {
        Optional<Speciality> speciality = specialityRepository.findById(id);
        return speciality.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Speciality> createSpeciality(@Valid @RequestBody Speciality speciality) {
        Speciality savedSpeciality = specialityRepository.save(speciality);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedSpeciality.getId()).toUri();
        return ResponseEntity.created(location).body(savedSpeciality);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Speciality> updateSpeciality(@PathVariable Long id,
                                                       @Valid @RequestBody Speciality speciality) {
        Optional<Speciality> existingSpeciality = specialityRepository.findById(id);
        if (existingSpeciality.isPresent()) {
            speciality.setId(id);
            Speciality updatedSpeciality = specialityRepository.save(speciality);
            return ResponseEntity.ok(updatedSpeciality);
        }
        return ResponseEntity.notFound().build();

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubject(@PathVariable Long id) {
        Optional<Speciality> existingSubject = specialityRepository.findById(id);
        if (existingSubject.isPresent()) {
            specialityRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();

    }
}
