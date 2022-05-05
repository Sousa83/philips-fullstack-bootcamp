package oo.bootcamp.challenge;

import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

import oo.bootcamp.challenge.models.*;

public class Main {
    public static void main(String[] args) {
        Content mentory = new Mentory(
                "Mentoria #1: Philips Fullstack Developer | You Are You",
                "Mentoria de inauguração",
                LocalDate.now()
        );

        Content course1 = new Course(
                "Introdução ao Spring Framework",
                "Curso de spring",
                3
        );

        Content course2 = new Course(
                "Introdução ao Spring Boot",
                "Curso de spring",
                3
        );

        Content course3 = new Course(
                "Simplificando Projetos Java com o Spring Boot",
                "Curso de spring",
                3
        );

        System.out.println(mentory);
        System.out.println();

        System.out.println(course1);
        System.out.println(course2);
        System.out.println(course3);

        Developer ss83 = new Developer("SS83");
        Bootcamp philips = new Bootcamp("Philips Fullstack Developer", "Are you Are");

        philips.getContents().add(mentory);
        philips.getContents().add(course1);
        philips.getContents().add(course2);
        philips.getContents().add(course3);

        System.out.println();

        ss83.subscribeBootcamp(philips);

        ss83.finishContent();
        ss83.finishContent();

        System.out.println(ss83);
        System.out.println(ss83.getSubscribedContent());
        System.out.println();
        System.out.println(philips);
        System.out.println(philips.getSubscribedDevelopers());
    }
}
