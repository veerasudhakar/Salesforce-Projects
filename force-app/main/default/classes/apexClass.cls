public with sharing class apexClass {
   @AuraEnabled(cacheable=true)
   public static List<Account> accountList(){
      return [select Id,Name,Type,Industry from Account  limit 5];
   }
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccount(String Type){
      return [select Id,Name,Type,Industry from Account where Type=:Type limit 5];
   }
   @AuraEnabled(cacheable=true)
   public static List<Account> SearchAccount(String Name){
      String key='%'+Name+'%';
      return [select Id,Name,Type from Account Where Name LIKE:key];
      
   }
    
   
}