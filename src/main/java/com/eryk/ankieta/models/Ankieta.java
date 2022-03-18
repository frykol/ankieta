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
    private String A;
    private String B;
    private String C;
    private String D;
    private String correctOption;
    private String difficulty;

    public Ankieta() {}

    public Ankieta(String questionName, String A, String B, String C, String D, String correctOption, String difficulty){
        this.questionName = questionName;
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
        this.correctOption = correctOption;
        this.difficulty = difficulty;
    }

}
