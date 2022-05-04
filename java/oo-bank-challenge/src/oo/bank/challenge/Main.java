package oo.bank.challenge;

import oo.bank.challenge.enums.AccountType;

import oo.bank.challenge.models.Bank;
import oo.bank.challenge.models.Client;
import oo.bank.challenge.models.Account;

public class Main {
    public static void main(String[] args) {
        Bank digiBank = Bank.getInstance();
        Client ssb83 = new Client("SS83");


        Account savingAccount = new Account(ssb83, AccountType.SAVINGS);
        Account checkingAccount = new Account(ssb83, AccountType.CHECKING);

        System.out.println(digiBank.getName());

        savingAccount.getAccountData();
        checkingAccount.getAccountData();

        checkingAccount.deposit(109.10);
        savingAccount.deposit(10000.00);
        checkingAccount.transfer(10, savingAccount);

        savingAccount.getAccountData();
        checkingAccount.getAccountData();


    }
}
