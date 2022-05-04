package oo.bank.challenge.models;

public class Bank {
    private String name = "digi-bank";
    private static Bank instance = new Bank();

    public static Bank getInstance() {
        return instance;
    }

    public String getName() {
        return name;
    }
}
