package com.eryk.ankieta.exception;

public class AnkietaNotFoundException extends RuntimeException{
    public AnkietaNotFoundException(String msg) {
        super(msg);
    }
}
