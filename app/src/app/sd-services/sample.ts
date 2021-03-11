/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class sample {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_sample

  async myclientstart(username = '', userpassword = '', ...others) {
    try {
      var bh = {
        input: {
          username: username,
          userpassword: userpassword,
        },
        local: {
          userdetails: '',
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.mystartscript(bh);
      //appendnew_next_myclientstart
      return (
        // formatting output variables
        {
          input: {},
          local: {
            userdetails: bh.local.userdetails,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fyFfDC3ymF81KQsi');
    }
  }

  async saveCredentials(id = '', name = '', ...others) {
    try {
      var bh = {
        input: {
          id: id,
          name: name,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.saveToStorage(bh);
      //appendnew_next_saveCredentials
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uVUrhs8uFPKPEgAa');
    }
  }

  async getId(...others) {
    try {
      var bh = {
        input: {},
        local: {
          id: '',
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getFromStorage1(bh);
      //appendnew_next_getId
      return (
        // formatting output variables
        {
          input: {},
          local: {
            id: bh.local.id,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pjOWsLk8XMizJJ4Y');
    }
  }

  async getName(...others) {
    try {
      var bh = {
        input: {},
        local: {
          name: '',
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getFromStorage2(bh);
      //appendnew_next_getName
      return (
        // formatting output variables
        {
          input: {},
          local: {
            name: bh.local.name,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eyVrhdPrGvjdI4Cc');
    }
  }

  async getCountry(...others) {
    try {
      var bh = {
        input: {},
        local: {
          country: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.countryApi(bh);
      //appendnew_next_getCountry
      return (
        // formatting output variables
        {
          input: {},
          local: {
            country: bh.local.country,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K3euuv1qzMDci2RU');
    }
  }

  //appendnew_flow_sample_start

  async mystartscript(bh) {
    try {
      bh.local.userdetails = bh.input.username + bh.input.userpassword;
      this.mylog(bh);
      //appendnew_next_mystartscript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rxnpNYkDxMFCEM8d');
    }
  }

  async mylog(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.userdetails);
      //appendnew_next_mylog
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_R08U73uKXnxJwLeN');
    }
  }

  async saveToStorage(bh) {
    try {
      localStorage.setItem('id', JSON.stringify(bh.input.id));
      bh = await this.saveName(bh);
      //appendnew_next_saveToStorage
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GpSUFouX90qyxqaJ');
    }
  }

  async saveName(bh) {
    try {
      localStorage.setItem('name', JSON.stringify(bh.input.name));
      //appendnew_next_saveName
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2ZYt1EZGEpQ7IcLX');
    }
  }

  async getFromStorage1(bh) {
    try {
      bh.local.id = JSON.parse(localStorage.getItem('id'));
      //appendnew_next_getFromStorage1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cBgXSRFsSC5ft65R');
    }
  }

  async getFromStorage2(bh) {
    try {
      bh.local.name = JSON.parse(localStorage.getItem('name'));
      //appendnew_next_getFromStorage2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7NWngy7GICgey6V1');
    }
  }

  async sd_xP0Aysyn0UduDT7x(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.error);
      //appendnew_next_sd_xP0Aysyn0UduDT7x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xP0Aysyn0UduDT7x');
    }
  }

  async countryApi(bh) {
    try {
      let requestOptions = {
        url: 'https://restcountries.eu/rest/v2/name/indonesia',
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.country = await this.sdService.nHttpRequest(requestOptions);
      this.sd_lR2iGhSJxNwkxhdq(bh);
      //appendnew_next_countryApi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IHzZbWi7lWrPVUTJ');
    }
  }

  async sd_lR2iGhSJxNwkxhdq(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), 'get country');
      //appendnew_next_sd_lR2iGhSJxNwkxhdq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lR2iGhSJxNwkxhdq');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.catcherror(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async catcherror(bh) {
    const catchConnectedNodes = ['sd_xP0Aysyn0UduDT7x'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    this.sd_xP0Aysyn0UduDT7x(bh);
    //appendnew_next_catcherror
    return true;
  }
  //appendnew_flow_sample_Catch
}
