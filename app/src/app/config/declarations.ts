import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-loginpageComponent
import { loginpageComponent } from '../components/loginpageComponent/loginpage.component';
//CORE_REFERENCE_IMPORT-responsivepageComponent
import { responsivepageComponent } from '../components/responsivepageComponent/responsivepage.component';
//CORE_REFERENCE_IMPORT-headerComponent
import { headerComponent } from '../components/headerComponent/header.component';
//CORE_REFERENCE_IMPORT-childpageComponent
import { childpageComponent } from '../components/childpageComponent/childpage.component';
//CORE_REFERENCE_IMPORT-expansionpageComponent
import { expansionpageComponent } from '../components/expansionpageComponent/expansionpage.component';
//CORE_REFERENCE_IMPORT-sidenavComponent
import { sidenavComponent } from '../components/sidenavComponent/sidenav.component';
//CORE_REFERENCE_IMPORT-chartpageComponent
import { chartpageComponent } from '../components/chartpageComponent/chartpage.component';
//CORE_REFERENCE_IMPORT-tablepageComponent
import { tablepageComponent } from '../components/tablepageComponent/tablepage.component';
//CORE_REFERENCE_IMPORT-formpageComponent
import { formpageComponent } from '../components/formpageComponent/formpage.component';
//CORE_REFERENCE_IMPORT-simplepageComponent
import { simplepageComponent } from '../components/simplepageComponent/simplepage.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginpageComponent
loginpageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-responsivepageComponent
responsivepageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-headerComponent
headerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-childpageComponent
childpageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-expansionpageComponent
expansionpageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sidenavComponent
sidenavComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-chartpageComponent
chartpageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-tablepageComponent
tablepageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-formpageComponent
formpageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-simplepageComponent
simplepageComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: simplepageComponent},{path: 'form', component: formpageComponent},{path: 'table', component: tablepageComponent},{path: 'chart', component: chartpageComponent},{path: 'sidenav', component: sidenavComponent},{path: 'responsive', component: responsivepageComponent},{path: 'login', component: loginpageComponent},{path: '', redirectTo: 'home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
