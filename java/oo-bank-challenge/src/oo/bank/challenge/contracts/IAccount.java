package oo.bank.challenge.contracts;

import oo.bank.challenge.models.Account;

public interface IAccount {
    void withdraw(double value);

    void deposit(double value);

    void transfer(double value, Account account);

    void getExtract();

    void getAccountData();
}

