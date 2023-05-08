package com.mesnuk.course.chair.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {
    @GetMapping ("text/index")
    public String index() {

        return "Hail Hitler!";
    }

}
