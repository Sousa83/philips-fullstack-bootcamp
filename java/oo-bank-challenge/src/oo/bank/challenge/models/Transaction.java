package oo.bank.challenge.models;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class Transaction {
    private final LocalDateTime DATE;
    private final double OLD_BALANCE;
    private final double NEW_BALANCE;

    private final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm", Locale.ENGLISH);

    public Transaction(double oldBalance, double newBalance) {
        this.DATE = LocalDateTime.now();

        this.OLD_BALANCE = oldBalance;
        this.NEW_BALANCE = newBalance;
    }

    @Override
    public String toString() {
        String dateFormatted = DATE.format(DATE_TIME_FORMATTER);
        String newBalanceSignal = OLD_BALANCE > NEW_BALANCE ? "-" : "+";

        return String.format(
                "Transaction made on: %s\nOld balance: %.2f\nNew balance: %s %.2f",
                dateFormatted,
                OLD_BALANCE,
                newBalanceSignal,
                NEW_BALANCE
        );
    }
}
