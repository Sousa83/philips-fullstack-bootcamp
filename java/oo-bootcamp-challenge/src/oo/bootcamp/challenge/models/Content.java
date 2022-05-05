package oo.bootcamp.challenge.models;

import oo.bootcamp.challenge.contracts.IExperience;

public abstract class Content implements IExperience {
    protected static final double DEFAULT_XP = 10;

    protected String title;
    protected String description;

    public Content(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public Content setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Content setDescription(String description) {
        this.description = description;
        return this;
    }
}
