import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICurrency, IFilterInput } from '../types/types';
@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangerService {
  public symbols$ = new BehaviorSubject<ICurrency[]>([]);
  private readonly baseUrl = 'https://api.apilayer.com/fixer/';
  private readonly apiKey = '4o5Kqsyd0pBpK29yUTUErWdiDmiMUNtR';
  constructor(private http: HttpClient) {

  }

  private get getHeader(){
    const header = new HttpHeaders()
    return header.set('apiKey', this.apiKey)
  }

  getSymbols():Observable<any> {
    return this.http.get('/assets/json/currency-symbols.json');
  }

  getConvertedCurrency(params : IFilterInput): Observable<any>{
    const url = `${this.baseUrl}convert?from=${params.from}&to=${params.to}&amount=${params.amount}`;
    return this.http.get(url, {headers : this.getHeader});
  }

  getLatestDataForPopularCurrencies(base: any):Observable<any> {
    const url = `${this.baseUrl}latest?base=${base}&symbols=GBP,EUR,JPY,USD,AUD,CAD,HKD,INR,QAR,SAR`;
    return this.http.get(url, {headers : this.getHeader});
  }

  getHistoricalData(
    from : any,
    to : any,
    startDate : string,
    endDate : string):Observable<any>{
      const url = `${this.baseUrl}timeseries?start_date=${startDate}&end_date=${endDate}&symbols=${from},${to}`;
      return this.http.get(url, {headers : this.getHeader});
  }
}
