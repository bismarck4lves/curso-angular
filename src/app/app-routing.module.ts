import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './containers/main-container/main-container.component';

const routes: Routes = [
  {
    path: 'financial',
    component: MainContainerComponent,
    loadChildren: () =>
      import('./modules/financial/financial.module').then(
        (m) => m.FinancialModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
