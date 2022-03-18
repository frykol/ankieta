package com.eryk.ankieta.repo;

import com.eryk.ankieta.models.Ankieta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnkietaRepo extends JpaRepository<Ankieta, Long> {

    Optional<Ankieta> findAnkietaById(Long id);

    void deleteAnkietaById(Long id);
}
