import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
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
    return this.http.get(url, {headers : this.getHeader})
    return of(
      {
        "success": true,
        "query": {
            "from": "GBP",
            "to": "JPY",
            "amount": 25
        },
        "info": {
            "timestamp": 1519328414,
            "rate": 148.972231
        },
        "historical": "",
        "date": "2018-02-22",
        "result": 3724.305775
    }
    )
  }

  getLatestDataForPopularCurrencies(base: any):Observable<any> {
    const url = `${this.baseUrl}latest?base=${base}&symbols=GBP,EUR,JPY,USD,AUD,CAD,HKD,INR,QAR,SAR`;
    return this.http.get(url, {headers : this.getHeader})

    return of({
      success: true,
      timestamp: 1519296206,
      base: 'USD',
      date: '2022-06-20',
      rates: {
        GBP: 0.72007,
        JPY: 107.346001,
        EUR: 0.813399,
      },
    });
  }

  getHistoricalData(
    from : any,
    to : any,
    startDate : string,
    endDate : string):Observable<any>{
      const url = `${this.baseUrl}timeseries?start_date=${startDate}&end_date=${endDate}&symbols=${from},${to}`;
      return this.http.get(url, {headers : this.getHeader})

      return of({
          "success": true,
          "timeseries": true,
          "start_date": "2012-05-01",
          "end_date": "2012-05-03",
          "base": "EUR",
          "rates": {
            '2012-05-01': {USD: 1.322891, AUD: 1.278047, CAD: 1.302303},
            '2012-05-02': {USD: 1.315066, AUD: 1.274202, CAD: 1.299083},
            '2012-05-03': {USD: 1.314491, AUD: 1.280135, CAD: 1.296868},
            '2012-06-01': {USD: 1.322891, AUD: 1.278047, CAD: 1.302303},
            '2012-06-02': {USD: 1.315066, AUD: 1.274202, CAD: 1.299083},
            '2012-06-03': {USD: 1.314491, AUD: 1.280135, CAD: 1.296868},
            '2012-07-01': {USD: 1.322891, AUD: 1.278047, CAD: 1.302303},
            '2012-07-02': {USD: 1.315066, AUD: 1.274202, CAD: 1.299083},
            '2012-07-03': {USD: 1.314491, AUD: 1.280135, CAD: 1.296868},
          }
      })
  }
}
