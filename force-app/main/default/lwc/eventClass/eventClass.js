import { LightningElement,track } from 'lwc';
import accountInsert from '@salesforce/apex/accountCreation.accountInsert';
import accName from '@salesforce/schema/Account.Name';
import accPhone from '@salesforce/schema/Account.Phone';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class EventClass extends LightningElement {
    @track accountid
    @track error;    
    @track getAccountRecord={
        Name:accName,       
        Phone:accPhone,  
              
    };   

   
    nameInpChange(event){
       this.getAccountRecord.Name = event.target.value;
       //window.console.log(this.getAccountRecord.Name);
     }

     phoneInpChange(event){
       this.getAccountRecord.Phone = event.target.value;
       //window.console.log(this.getAccountRecord.Phone);
    }
    
     
    
      saveAccountAction(){
        window.console.log('before save' + this.createAccount);
        insertAccountMethod({accountObj:this.getAccountRecord})
        .then(result=>{
          window.console.log(this.createAccount);
            this.getAccountRecord={};
            this.accountid=result.Id;
            window.console.log('after save' + this.accountid);
            
            const toastEvent = new ShowToastEvent({
              title:'Success!',
              message:'Account created successfully',
              variant:'success'
            });
            this.dispatchEvent(toastEvent);
        })
        .catch(error=>{
           window.console.log(error);
           const toastEvent = new ShowToastEvent({
            title:'Error!',
            message:'Account Not created successfully',
            variant:'error'
          });
          this.dispatchEvent(toastEvent);
        });
      }
}