import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CurrencyExchangerService } from 'src/app/services/currency-exchanger.service';

@Component({
  selector: 'app-currency-exchanger-container',
  templateUrl: './currency-exchanger-container.component.html',
  styleUrls: ['./currency-exchanger-container.component.scss'],
})
export class CurrencyExchangerContainerComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>()
  constructor(
    private route: ActivatedRoute,
    private currencyExchangerService: CurrencyExchangerService
  ) {}

  ngOnInit(): void {
    this.route.data
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe((data : any) => {
      this.currencyExchangerService.symbols$.next(data.symbols);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
