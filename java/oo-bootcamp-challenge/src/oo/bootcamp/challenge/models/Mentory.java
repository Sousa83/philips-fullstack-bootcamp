package oo.bootcamp.challenge.models;

import java.time.LocalDate;

public class Mentory extends Content {
    private final LocalDate DATE;

    public Mentory(String title, String description, LocalDate date) {
        super(title, description);
        this.DATE = date;
    }

    @Override
    public double calcExperience() {
        return DEFAULT_XP + 15;
    }

    @Override
    public String toString() {
        return "Mentoria {" +
                "titulo='" + getTitle() + '\'' +
                ", descricao='" + getDescription() + '\'' +
                ", data=" + getDate() +
                '}';
    }

    public LocalDate getDate() {
        return DATE;
    }

}
