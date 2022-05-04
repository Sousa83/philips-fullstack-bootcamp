package oo.bank.challenge.models;

public class Client {
    public String name;


    public Client(String name) {
        this.setName(name);
    }

    public String getName() {
        return name;
    }

    private void setName(String name) {
        this.name = name;
    }
}
