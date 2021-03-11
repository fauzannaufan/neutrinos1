/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, EventEmitter, SimpleChanges, Input, Output } from '@angular/core'
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
    selector: 'bh-childpage',
    templateUrl: './childpage.template.html'
})

export class childpageComponent extends NBaseComponent implements OnInit {

    @Input() price:number;
    @Input() amount:number;
    @Output() emitter=new EventEmitter<number>();

    showMessage = false;
    totalPrice = 0;

    constructor() {
        super();
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        //console.log(this.price, this.amount);
        if (this.price && this.amount) {
            this.showMessage = true;
            this.totalPrice = this.price * this.amount;

            this.emitter.emit(this.totalPrice);
        } else {
            this.showMessage = false;
            this.totalPrice = 0;
            this.emitter.emit(0);
        }
    }
}
