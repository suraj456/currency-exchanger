import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexYAxis,
} from 'ng-apexcharts';
import { IFilterInput, ITimeSeries } from 'src/app/types/types';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend?: ApexLegend;
};
@Component({
  selector: 'app-historical-details',
  templateUrl: './historical-details.component.html',
  styleUrls: ['./historical-details.component.scss'],
})
export class HistoricalDetailsComponent implements OnInit, OnChanges {
  @Input() data: ITimeSeries;
  @Input() params: IFilterInput;
  public chartOptions: ChartOptions;
  private months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  constructor() {
    this.createChartConfig();
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data && Object.keys(this.data).length > 0) {
      this.createChartConfig();
      this.createChart();
    }
  }

  private createChartConfig() {
    this.chartOptions = {
      series: [],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: this.months,
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + '';
          },
        },
      },
    };
  }

  private createChart() {
    let currentMonth = null;
    const currencies = Object.keys(Object.values(this.data.rates)[0]);
    let seriesObj: any = {};
    currencies.map(
      (currency) => (seriesObj[currency] = new Array(12).fill(null))
    );
    for (let [key, value] of Object.entries(this.data.rates).reverse()) {
      const month = Number(key.split('-')[1]);
      if (month !== currentMonth) {
        currentMonth = month;
        Object.keys(value).forEach((s) => {
          seriesObj[s][month - 1] = value[s];
        });
      }
    }
    this.chartOptions.series = Object.keys(seriesObj).map((series) => {
      return {
        name: series,
        data: seriesObj[series],
      };
    });
  }
}
