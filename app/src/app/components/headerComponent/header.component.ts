/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { sample } from 'app/sd-services/sample';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-header',
    templateUrl: './header.template.html'
})

export class headerComponent extends NBaseComponent implements OnInit {

    name = "";

    constructor(public service:sample) {
        super();
    }

    ngOnInit() {
        this.getName();
    }

    async getName() {
        let result = await this.service.getName();
        this.name = result.local.name;
    }
}
