/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { localesService } from '../../../../baseClasses/localesService';

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

    constructor() {
        super();
    }

    ngOnInit() {

    }

    onSubmit() {
        console.log('button clicked');
    }

    toggle() {
        if (localesService.getLocalesInstance().defaultLcid !== 'en') {
            localesService.getLocalesInstance().language = 'en';
        } else {
            localesService.getLocalesInstance().language = 'id';
        }
    }
}
