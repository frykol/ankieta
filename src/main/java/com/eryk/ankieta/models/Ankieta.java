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
    private Number aPoints = 0;
    private Number bPoints = 0;
    private Number cPoints = 0;
    private Number dPoints = 0;


    public Ankieta() {}

    public Ankieta(String questionName, String A, String B, String C, String D){
        this.questionName = questionName;
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
        this.aPoints = 0;
        this.bPoints = 0;
        this.cPoints = 0;
        this.dPoints = 0;
    }

}
