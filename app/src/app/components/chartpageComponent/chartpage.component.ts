/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormControl } from '@angular/forms'
import {MatAutocompleteModule} from '@angular/material/autocomplete';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-chartpage',
    templateUrl: './chartpage.template.html'
})



export class chartpageComponent extends NBaseComponent implements OnInit {

    public barChartData:Array<any> = [
        {data: [65, 59, 55, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];

    public barChartLabels:Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];

    public barChartOptions:any = {
        responsive: true    
    };

    public pieChartData: Array<any> = [
        {
            data: [
            25,
            11,
            8,
            9,
            18,
            29
            ]
        }  
    ];

    public pieChartLabels:string [
] = [
  'Emergency & Casualty',
  'Labor Ward',
  'Endoscopy Ward',
  'Coronary Ward',
  'Surgical Ward',
  'General Ward'
];

public pieChartOptions:any = {
  responsive: true  
};

    constructor() {
        super();
    }

    ngOnInit() {
   }

   myControl = new FormControl();   // new form control
    options: string[] = ['One', 'Two', 'Three'];
    
}
