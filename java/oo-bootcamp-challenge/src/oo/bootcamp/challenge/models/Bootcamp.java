package oo.bootcamp.challenge.models;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

public class Bootcamp {
    private final LocalDate START_DATE = LocalDate.now();
    private final LocalDate END_DATE = START_DATE.plusDays(120);
    private final Set<Content> CONTENTS = new LinkedHashSet<>();

    private String name;
    private String description;
    private Set<Developer> subscribedDevelopers = new HashSet<>();

    public Bootcamp(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public LocalDate getSartDate() {
        return START_DATE;
    }

    public LocalDate getEndDate() {
        return END_DATE;
    }

    public String getName() {
        return name;
    }

    public Bootcamp setName(String name) {
        this.name = name;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Bootcamp setDescription(String description) {
        this.description = description;
        return this;
    }

    @Override
    public String toString() {
        return String.format("Bootcamp { title: %s, desc %s }", name, description);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bootcamp bootcamp = (Bootcamp) o;
        return Objects.equals(START_DATE, bootcamp.START_DATE) && Objects.equals(END_DATE, bootcamp.END_DATE) && Objects.equals(CONTENTS, bootcamp.CONTENTS) && Objects.equals(name, bootcamp.name) && Objects.equals(description, bootcamp.description) && Objects.equals(subscribedDevelopers, bootcamp.subscribedDevelopers);
    }

    @Override
    public int hashCode() {
        return Objects.hash(START_DATE, END_DATE, CONTENTS, name, description, subscribedDevelopers);
    }

    public Set<Developer> getSubscribedDevelopers() {
        return subscribedDevelopers;
    }

    public Bootcamp setSubscribedDevelopers(Set<Developer> subscribedDevelopers) {
        this.subscribedDevelopers = subscribedDevelopers;
        return this;
    }

    public Set<Content> getContents() {
        return CONTENTS;
    }

}
