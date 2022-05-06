public with sharing class accountCreation {
    @AuraEnabled
    public static Account accountInsert(String Name){
    Account accountObj =new Account(Name=Name);
       
            insert accountObj;
            return accountObj;
        
    }
}