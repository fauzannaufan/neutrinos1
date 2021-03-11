/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder,Validators} from '@angular/forms'
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
    selector: 'bh-loginpage',
    templateUrl: './loginpage.template.html'
})

export class loginpageComponent extends NBaseComponent implements OnInit {

    loginform;

    constructor(public fb:FormBuilder, public service:sample) {
        super();
    }

    ngOnInit() {
        this.loginform = this.fb.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
        });
    }

    onSubmit(event) {
        this.loginform.markAllAsTouched();
        if (this.loginform.valid) {
            this.service.saveCredentials(this.loginform.value.id, this.loginform.value.name);
            window.open('/responsivepage', '_self');
        }
    }
}
