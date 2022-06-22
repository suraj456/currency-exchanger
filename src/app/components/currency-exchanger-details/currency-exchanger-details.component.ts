import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CurrencyExchangerService } from 'src/app/services/currency-exchanger.service';
import { IConvertCurrency, IFilterInput, ITimeSeries } from 'src/app/types/types';
import { combineLatest, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-currency-exchanger-details',
  templateUrl: './currency-exchanger-details.component.html',
  styleUrls: ['./currency-exchanger-details.component.scss']
})
export class CurrencyExchangerDetailsComponent implements OnInit, OnDestroy {
  public params : IFilterInput = {};
  public historicalData : ITimeSeries;
  public convertedData : IConvertCurrency
  private destroy$ = new Subject<boolean>()
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private currencyExhangerService : CurrencyExchangerService) { }

  ngOnInit(): void {
    this.router.events
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe(event=>{
      if (event instanceof NavigationEnd) {
        this.initialize()
      }
    })
    this.initialize()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe()
  }

  private initialize(){
    this.getParams();
    this.getData(this.params)
  }

  private getParams(){
    const type = this.route.snapshot.paramMap.get('type');
    const amount = this.route.snapshot.paramMap.get('amount') as string;
    const from = type?.split('-')[0].toUpperCase();
    const to = type?.split('-')[1].toUpperCase();
    this.params = { from, to, amount}
  }

  private getData(event : IFilterInput){
    const dates = this.getDateRange();
    combineLatest([
      this.currencyExhangerService.getConvertedCurrency(event),
      this.currencyExhangerService.getHistoricalData(event.from, event.to, dates.startDate, dates.endDate)
    ])
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe(([convertedData, historicalData])=>{
      console.log(convertedData, historicalData, 'details')
      this.historicalData = historicalData;
      this.convertedData = convertedData
    })

  }

  convert(event : IFilterInput){
    this.getData(event)
  }

  private getDateRange() : {startDate : string, endDate : string}{
    const currentYear = new Date().getFullYear() - 1;
    const d = new Date(currentYear, 0, 1);
    return {
      startDate : `${d.getFullYear()}-01-01`,
      endDate : `${d.getFullYear()}-12-31`,
    }
    // return {
    //   startDate : `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`,
    //   endDate : `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
    // }
  }






}
