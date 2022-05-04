package oo.bank.challenge.models;

import oo.bank.challenge.contracts.IAccount;
import oo.bank.challenge.enums.AccountType;


public class Account implements IAccount {
    private static final int DEFAULT_AGENCY = 1;
    private static int ACCOUNT_SEQUENCE = 1;

    private double balance;
    private final int NUMBER;
    private final int AGENCY;
    private final Client CLIENT;
    private final Bank bank = Bank.getInstance();
    private final AccountType TYPE;

    public Account(Client client, AccountType type) {
        AGENCY = DEFAULT_AGENCY;
        NUMBER = ACCOUNT_SEQUENCE++;

        TYPE = type;
        CLIENT = client;
    }

    @Override
    public void deposit(double value) {
        this.balance += value;
    }

    @Override
    public void withdraw(double value) {
        this.balance -= value;
    }

    @Override
    public void transfer(double value, Account destinationAccount) {
        withdraw(value);
        destinationAccount.deposit(value);
    }


    @Override
    public void getAccountData() {
        System.out.println();

        System.out.printf("\n=== bank: %s", bank.getName());
        System.out.printf("\n=== agency: %s", AGENCY);
        System.out.printf("\n=== account: %s", NUMBER);
        System.out.printf("\n=== type: %s", TYPE);
        System.out.printf("\n=== client: %s", CLIENT.getName());
        System.out.printf("\n=== balance: %.2f", balance);

        System.out.println();
    }
}
