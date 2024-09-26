import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { BoxPreviewComponent } from './components/box-preview/box-preview.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    BoxPreviewComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule
  ]
})
export class FinancialModule { }
