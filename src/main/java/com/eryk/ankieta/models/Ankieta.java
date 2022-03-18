package com.eryk.ankieta.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;


@Getter
@Setter
@Entity
public class Ankieta implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String questionName;
    private String aAnswer;
    private String bAnswer;
    private String cAnswer;
    private String dAnswer;
    private String correctAnswer;
    private String difficulty;

    public Ankieta() {}

    public Ankieta(String questionName, String aAnswer, String bAnswer, String cAnswer, String dAnswer, String correctAnswer, String difficulty){
        this.questionName = questionName;
        this.aAnswer = aAnswer;
        this.bAnswer = bAnswer;
        this.cAnswer = cAnswer;
        this.dAnswer = dAnswer;
        this.correctAnswer = correctAnswer;
        this.difficulty = difficulty;
    }

}
