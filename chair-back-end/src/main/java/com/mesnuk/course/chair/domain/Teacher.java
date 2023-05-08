package com.mesnuk.course.chair.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "teachers")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String firstName;
    private String lastName;
    private String email;
    private Long chairId;
    private String rank;
    private String role;
    private String password;

    public void setId(Long id) {
    }
}
