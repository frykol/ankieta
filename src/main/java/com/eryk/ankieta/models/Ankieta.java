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
    private String QuestionName;
    private String aAnswer;
    private String bAnswer;
    private String cAnswer;
    private String dAnswer;
    private String correctAnswer;


}
