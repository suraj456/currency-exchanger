import { Component, Input, OnInit } from '@angular/core';
import { IConvertCurrency, IFilterInput } from 'src/app/types/types';

@Component({
  selector: 'app-converted-result',
  templateUrl: './converted-result.component.html',
  styleUrls: ['./converted-result.component.scss']
})
export class ConvertedResultComponent implements OnInit {
  @Input() data : IConvertCurrency;
  @Input()params : IFilterInput;
  constructor() { }

  ngOnInit(): void {
  }

}
