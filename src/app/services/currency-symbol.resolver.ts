import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrencyExchangerService } from './currency-exchanger.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencySymbolResolver implements Resolve<boolean> {
  constructor(private currencyExchangerService: CurrencyExchangerService) {}
  resolve(): Observable<any> {
    return this.currencyExchangerService.getSymbols();
  }
}
