import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { NewClientComponent } from './pages/new-client/new-client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  },
  { path: 'new', component: NewClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
