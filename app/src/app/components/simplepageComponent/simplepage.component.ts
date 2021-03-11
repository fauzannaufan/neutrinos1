/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { localesService } from '../../../../baseClasses/localesService';
import { sample } from '../../sd-services/sample';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-simplepage',
    templateUrl: './simplepage.template.html'
})

export class simplepageComponent extends NBaseComponent implements OnInit {

    price;
    amount;
    limit = 1000000;
    showMessage = false;

    constructor(public clientservice:sample) {
        super();
    }

    ngOnInit() {

    }

    onClick() {
        
    }

    async callservice() {
        let result = await this.clientservice.myclientstart(this.price, this.amount);
        console.log(result)
    }

    respondToPrice(event) {
        //console.log(event);
        this.callservice();
        if (event <= this.limit) {
            this.showMessage = false;
        } else {
            this.showMessage = true;
        }
    }
}
