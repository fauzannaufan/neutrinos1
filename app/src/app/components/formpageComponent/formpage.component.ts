/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder,Validators} from '@angular/forms'
import {NSystemService} from 'neutrinos-seed-services'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-formpage',
    templateUrl: './formpage.template.html'
})

export class formpageComponent extends NBaseComponent implements OnInit {

    loginform;
    showhints:boolean = true;
    sys = NSystemService.getInstance();
    myControl = new FormControl();
  options: string[] = ['Indonesia', 'India', 'United States'];
  statuses = [{value: 'Single'}, {value: 'Married'}];
  filteredOptions: Observable<string[]>;

    constructor(public fb:FormBuilder) {
        super();
    }

    ngOnInit() {
        this.loginform = this.fb.group({
            username:['', [Validators.required]],
            userpassword:['', [Validators.required]]
        })

        console.log(this.sys)

        this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }

    private _filter(value: string): string[] {
        console.log(value)
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    onSubmit() {
        this.loginform.markAllAsTouched();
        if (this.loginform.valid) {
        console.log(this.loginform.value)
        } else {
            alert("Form invalid!");
        }
    }
}
