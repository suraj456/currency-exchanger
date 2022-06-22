import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyExchangerContainerComponent } from './components/currency-exchanger-container/currency-exchanger-container.component';
import { CurrencyExchangerDetailsComponent } from './components/currency-exchanger-details/currency-exchanger-details.component';
import { CurrencyExchangerComponent } from './components/currency-exchanger/currency-exchanger.component';
import { LoginComponent } from './components/login/login.component';
import { CurrencySymbolResolver } from './services/currency-symbol.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'converter',
    component: CurrencyExchangerContainerComponent,
    resolve : {
      symbols : CurrencySymbolResolver
    },
    children: [
      {
        path: 'home',
        component: CurrencyExchangerComponent,
      },
      {
        path: 'details/:type/:amount',
        component: CurrencyExchangerDetailsComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
