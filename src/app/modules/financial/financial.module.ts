import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { BoxPreviewComponent } from './components/box-preview/box-preview.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainButtonDirective } from './directives/main-button.directive';


@NgModule({
  declarations: [
    BoxPreviewComponent,
    DashboardComponent,
    MainButtonDirective
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule
  ]
})
export class FinancialModule { }
