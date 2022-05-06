import { LightningElement,wire,track } from 'lwc';
import accountInsert from '@salesforce/apex/accountCreation.accountInsert';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CreateAccount extends LightningElement {
  inputValue
  inputChange(event)
  {
  this.inputValue=event.target.value
  }
  saveAccountAction()
  {
    accountInsert({Name:this.inputValue}).then(result=>{
      console.log('result'+result.Name)
    console.log("account Creation"+result.Id)
    }).catch(error=>{
      console.log(error)
    })
  }
}