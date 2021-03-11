/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-expansionpage',
    templateUrl: './expansionpage.template.html'
})

export class expansionpageComponent extends NBaseComponent implements OnInit {

    @Input() username:string;
    @Output() newEvent = new EventEmitter<string>();

    constructor() {
        super();
    }

    ngOnInit() {
        console.log(this.username);
    }

    ngOnChanges(changes: SimpleChanges) {
        let newValue = changes?.username?.currentValue + " people";

        this.newEvent.emit(newValue);
    }
}
