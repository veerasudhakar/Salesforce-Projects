import { api, LightningElement,track } from 'lwc';

export default class BeerSearch extends LightningElement {
    @track searchValue;
    @track searchValue;
    handleChange(event)
     {
    const value=event.target.value;
    const beerevents=new CustomEvent('simple',
    {
        detail:event.target.value
    })
    this.dispatchEvent(beerevents);

    alert(value);
     }
}