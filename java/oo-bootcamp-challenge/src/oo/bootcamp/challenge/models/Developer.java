package oo.bootcamp.challenge.models;

import oo.bootcamp.challenge.contracts.IExperience;
import oo.bootcamp.challenge.enums.ContentStatus;

import java.util.*;
import java.util.stream.Collectors;

public class Developer implements IExperience {
    private String name;
    private Map<Content, ContentStatus> subscribedContent = new LinkedHashMap<>();

    public Developer(String name) {
        setName(name);
    }

    public void subscribeBootcamp(Bootcamp bootcamp) {
        bootcamp.getContents().forEach(c -> subscribedContent.put(c, ContentStatus.UNFINISHED));
        bootcamp.getSubscribedDevelopers().add(this);
    }

    public void finishContent() {
        Optional<Map.Entry<Content, ContentStatus>> entryContent = subscribedContent
                .entrySet()
                .stream()
                .filter(ec -> ec.getValue() != ContentStatus.FINISHED)
                .findFirst();

        if (entryContent.isPresent()) {
            entryContent.get().setValue(ContentStatus.FINISHED);
        } else {
            System.err.println("Você não está matriculado em nenhum conteúdo!");
        }
    }

    @Override
    public double calcExperience() {
        return subscribedContent
                .entrySet()
                .stream()
                .filter(ec -> ec.getValue() == ContentStatus.FINISHED)
                .mapToDouble(ec -> ec.getKey().calcExperience())
                .sum();
    }

    @Override
    public String toString() {
        return String.format("Developer: { name: %s, xp: %.2f }", getName(), calcExperience());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getSubscribedContent() {
        return subscribedContent
                .entrySet()
                .stream()
                .map(ec -> String.format("\n{ content: %s, status: %s }", ec.getKey().title, ec.getValue().toString()))
                .collect(Collectors.joining());
    }

    public void setSubscribedContent(Map<Content, ContentStatus> subscribedContent) {
        this.subscribedContent = subscribedContent;
    }
}
