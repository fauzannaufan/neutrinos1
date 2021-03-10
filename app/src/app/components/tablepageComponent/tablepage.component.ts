/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatTableDataSource} from '@angular/material/table'

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-tablepage',
    templateUrl: './tablepage.template.html'
})

export class tablepageComponent extends NBaseComponent implements OnInit {

    data = [
        {name: 'A',
        email: 'a@a.com',
        phone:'1234'},
        {name: 'B',
        email: 'b@a.com',
        phone:'12234'}
    ]
    datasource = new MatTableDataSource(this.data);

    constructor() {
        super();
    }

    ngOnInit() {

    }
}
