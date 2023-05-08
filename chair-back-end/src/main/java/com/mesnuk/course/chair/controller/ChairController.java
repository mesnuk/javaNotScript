package com.mesnuk.course.chair.controller;

import java.util.List;
import java.util.Optional;

import com.mesnuk.course.chair.domain.Chair;
import com.mesnuk.course.chair.repository.ChairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chairs")
public class ChairController {

    @Autowired
    private ChairRepository chairRepository;

    @GetMapping
    public List<Chair> getAllChairs() {
        return chairRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chair> getChairById(@PathVariable Long id) {
        Optional<Chair> chair = chairRepository.findById(id);
        if (chair.isPresent()) {
            return ResponseEntity.ok(chair.get());
        }

        return ResponseEntity.notFound().build();

    }

    @PostMapping
    public ResponseEntity<Chair> create
            (@RequestBody Chair chair) {
        Chair savedChair = chairRepository.save(chair);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedChair);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Chair> updateChair(@PathVariable Long id, @RequestBody Chair chair) {
        Optional<Chair> existingChair = chairRepository.findById(id);
        if (existingChair.isPresent()) {
            chair.setId(id);
            Chair updatedChair = chairRepository.save(chair);
            return ResponseEntity.ok(updatedChair);
        }
        return ResponseEntity.notFound().build();

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChair(@PathVariable Long id) {
        Optional<Chair> existingChair = chairRepository.findById(id);
        if (existingChair.isPresent()) {
            chairRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();

    }

}