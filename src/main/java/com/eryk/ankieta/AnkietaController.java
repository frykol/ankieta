package com.eryk.ankieta;


import com.eryk.ankieta.models.Ankieta;
import com.eryk.ankieta.service.AnkietaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ankieta")
public class AnkietaController {
    private final AnkietaService ankietaService;

    public AnkietaController(AnkietaService ankietaService) {
        this.ankietaService = ankietaService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Ankieta>> getAllAnkieta(){
       List<Ankieta> ankiety = ankietaService.findAllAnkieta();
       return new ResponseEntity<>(ankiety, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Ankieta> getAnkietaById(@PathVariable("id") Long id){
        Ankieta ankieta = ankietaService.findAnkietaById(id);
        return new ResponseEntity<>(ankieta, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Ankieta> addAnkieta(@RequestBody Ankieta ankieta){
        Ankieta newAnkieta = ankietaService.addAnkieta(ankieta);
        return new ResponseEntity<>(ankieta, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Ankieta> updateAnkieta(@RequestBody Ankieta ankieta){
        Ankieta updateAnkieta = ankietaService.updateAnkieta(ankieta);
        return new ResponseEntity<>(updateAnkieta, HttpStatus.OK);
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<?> deleteAnkieta(@PathVariable("id") Long id){
        ankietaService.deleteAnkieta(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
