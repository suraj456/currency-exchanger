import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CurrencyExchangerService } from 'src/app/services/currency-exchanger.service';
import { IFilterInput } from 'src/app/types/types';

@Component({
  selector: 'app-currency-exchanger-filter',
  templateUrl: './currency-exchanger-filter.component.html',
  styleUrls: ['./currency-exchanger-filter.component.scss'],
})
export class CurrencyExchangerFilterComponent implements OnDestroy, OnChanges {
  @Input() options ? : IFilterInput;
  @Output() event = new EventEmitter<IFilterInput>();
  filterForm: FormGroup;
  dropDownOptions : {
    from : string[]
    to : string[]
  } = { from : [], to : []};
  symbols : any[];
  private destroy$ = new Subject<boolean>()
  constructor(private formBuilder: FormBuilder,
    private currencyExchangerService : CurrencyExchangerService ) {
      this.getSymbols();
      this.buildForm();
    }

  get amount() {
    return this.filterForm.get('amount');
  }

  ngOnChanges(): void {
    if (this.options) {
      this.filterForm.patchValue({
        from : this.options.from,
        to : this.options.to,
        amount : this.options.amount
      })
    }
  }

  private buildForm():void{
    this.filterForm = this.formBuilder.group({
      amount: ['1', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private getSymbols():void{
    this.currencyExchangerService.symbols$
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe(s=>{
      this.symbols = s.map(data=> data.abbreviation);
      this.dropDownOptions.from = this.symbols;
      this.dropDownOptions.to = this.symbols;
    })
  }

  emit() {
    this.event.emit(this.filterForm.value);
  }

  validateAmount(e: any) {
    const value = e.target.value;
    if (value && !isNaN(value)) {
      this.amount?.setErrors(null);
    } else {
      this.amount?.setErrors({
        invalidNumber: true,
      });
    }
  }

  swapValues() {
    const values = this.filterForm.value;
    this.filterForm.setValue({
      ...values,
      ...{
        from: values.to,
        to: values.from,
      },
    });
  }
}
