package oo.bootcamp.challenge.models;

public class Course extends Content {
    private final int TOTAL_HOURS;
    public Course(String title, String description, int totalHours) {
        super(title, description);
        this.TOTAL_HOURS = totalHours;
    }

    public int getTotalHours() {
        return TOTAL_HOURS;
    }

    @Override
    public double calcExperience() {
        return DEFAULT_XP + 20;
    }

    @Override
    public String toString() {
        return "Curso {" +
                "titulo='" + getTitle() + '\'' +
                ", descricao='" + getDescription() + '\'' +
                ", cargaHoraria=" + getTotalHours() +
                '}';
    }
}
