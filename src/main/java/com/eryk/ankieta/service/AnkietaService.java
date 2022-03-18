package com.eryk.ankieta.service;

import com.eryk.ankieta.exception.AnkietaNotFoundException;
import com.eryk.ankieta.models.Ankieta;
import com.eryk.ankieta.repo.AnkietaRepo;

import javax.transaction.Transactional;
import java.util.List;

public class AnkietaService {
    private final AnkietaRepo ankietaRepo;

    public AnkietaService(AnkietaRepo ankietaRepo) {
        this.ankietaRepo = ankietaRepo;
    }

    public List<Ankieta> findAllAnkieta(){
        return ankietaRepo.findAll();
    }

    public Ankieta findAnkietaById(Long id){
        return ankietaRepo.findAnkietaById(id).orElseThrow(() -> new AnkietaNotFoundException("Ta ankieta nie istnieje"));
    }

    public Ankieta addAnkieta(Ankieta ankieta){
        return ankietaRepo.save(ankieta);
    }

    public Ankieta updateAnkieta(Ankieta ankieta){
        return ankietaRepo.save(ankieta);
    }

    @Transactional
    public void deleteAnkieta(Long id){
        ankietaRepo.deleteAnkietaById(id);
    }
}
