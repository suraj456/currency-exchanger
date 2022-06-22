import { Component, Input, OnInit } from '@angular/core';
import { ICurrency } from 'src/app/types/types';

@Component({
  selector: 'app-currency-exchanger-widgets',
  templateUrl: './currency-exchanger-widgets.component.html',
  styleUrls: ['./currency-exchanger-widgets.component.scss']
})
export class CurrencyExchangerWidgetsComponent implements OnInit {
  @Input() data : ICurrency
  constructor() { }

  ngOnInit(): void {
  }

}
