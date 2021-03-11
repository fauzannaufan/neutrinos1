/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {sample} from 'app/sd-services/sample'

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-responsivepage',
    templateUrl: './responsivepage.template.html'
})

export class responsivepageComponent extends NBaseComponent implements OnInit {

    countrydata;

    constructor(public service:sample) {
        super();
    }

    ngOnInit() {
        this.getCountry();
    }

    async getCountry() {
        console.log(this.service)
        let result = await this.service.getCountry();
        console.log(result)
        this.countrydata = result.local.country[0];
    }
}
