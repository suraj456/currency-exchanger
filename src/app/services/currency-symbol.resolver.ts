import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { CurrencyExchangerService } from './currency-exchanger.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencySymbolResolver implements Resolve<boolean> {
  constructor(private currencyExchangerService : CurrencyExchangerService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.currencyExchangerService.getSymbols()
  }
}
