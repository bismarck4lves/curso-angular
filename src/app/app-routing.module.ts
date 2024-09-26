import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [{ path: '', component: WelcomeComponent }],
  },
  {
    path: 'financial',
    component: MainContainerComponent,
    loadChildren: () =>
      import('./modules/financial/financial.module').then(
        (m) => m.FinancialModule
      ),
  },
  {
    path: 'clients',
    component: MainContainerComponent,
    loadChildren: () =>
      import('./modules/clients/clients.module').then((m) => m.ClientsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
