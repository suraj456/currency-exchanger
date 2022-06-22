import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CurrencyExchangerFilterComponent } from './components/currency-exchanger-filter/currency-exchanger-filter.component';
import { CurrencyExchangerWidgetsComponent } from './components/currency-exchanger-widgets/currency-exchanger-widgets.component';
import { CurrencyExchangerContainerComponent } from './components/currency-exchanger-container/currency-exchanger-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyExchangerComponent } from './components/currency-exchanger/currency-exchanger.component';
import { CurrencyExchangerDetailsComponent } from './components/currency-exchanger-details/currency-exchanger-details.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HistoricalDetailsComponent } from './components/historical-details/historical-details.component';
import { ConvertedResultComponent } from './components/converted-result/converted-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CurrencyExchangerFilterComponent,
    CurrencyExchangerWidgetsComponent,
    CurrencyExchangerContainerComponent,
    CurrencyExchangerComponent,
    CurrencyExchangerDetailsComponent,
    HistoricalDetailsComponent,
    ConvertedResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
