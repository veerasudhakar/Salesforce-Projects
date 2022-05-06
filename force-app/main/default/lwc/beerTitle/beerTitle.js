import { LightningElement,track,api } from 'lwc';
import beer from '@salesforce/resourceUrl/beer';
export default class BeerTitle extends LightningElement {
    @api beerRecord;
    @track beerImg = beer;
    
}