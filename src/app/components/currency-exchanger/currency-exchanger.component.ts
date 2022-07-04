import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { CurrencyExchangerService } from 'src/app/services/currency-exchanger.service';
import { IConvertCurrency, ICurrency, IFilterInput } from 'src/app/types/types';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.scss']
})
export class CurrencyExchangerComponent implements OnInit, OnDestroy {
  public latestCurrencyData : ICurrency[] = [];
  public convertedData : IConvertCurrency;
  public showResults = false
  private destroy$ = new Subject<boolean>();
  private params : IFilterInput;
  constructor(
    private currencyExhangerService : CurrencyExchangerService,
    private router : Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  convert(event : IFilterInput){
    this.params = event
    combineLatest([
      this.currencyExhangerService.getLatestDataForPopularCurrencies(event.from),
      this.currencyExhangerService.getConvertedCurrency(event),
      this.currencyExhangerService.symbols$
    ])
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe(([allCurrencies, convertedResponse, symbols])=>{
      this.convertedData = convertedResponse;
      for (const [key, value]  of Object.entries(allCurrencies?.rates)) {
        let obj = symbols.find(s=>
          s.abbreviation?.trim().toLowerCase() === key.toLowerCase()) as ICurrency
        if (obj) obj.value = value;
        else obj = { value, abbreviation : key}
        this.latestCurrencyData.push(obj);
      }
      this.showResults = true;
    },()=> this.showResults = false)
  }

  navigate(){
    this.router.navigate(
      [`/converter/details/${this.params.from}-${this.params.to}/${this.params.amount}`]
    )
  }

}
