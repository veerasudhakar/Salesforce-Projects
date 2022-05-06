import { LightningElement,track,wire } from 'lwc';
import searchBeer from '@salesforce/apex/BeerController.searchBeer';
import cartIco from '@salesforce/resourceUrl/cart';

export default class BeerList extends LightningElement {
    @track beerRecords;
    @track errros;
    @track cart = cartIco;
    
    @track cartId;
    @track itemsinCart = 0;
 
    @wire(searchBeer)
        wiredRecords({error, data}){
            
            if ( data ) {
                this.beerRecords = data;
                this.errors = undefined;
            }
            if( error ) {
                this.beerRecords = undefined;
                this.errors = error;
            }
        }

        handlesimple(event){
            const eventVal = event.detail;
            console.log('eventVal',eventVal);
            searchBeer({
                searchParam : eventVal
            })
            .then(result => {
                
                this.beerRecords = result;
                this.errros = undefined;
            })
            .catch(error => {
                
                this.errors = error;
                this.beerRecords = undefined;
            });
        }
    
}