import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './pages/clients/clients.component';
import { MainButtonDirective } from '../financial/directives/main-button.directive';
import { NewClientComponent } from './pages/new-client/new-client.component';

@NgModule({
  declarations: [ClientsComponent, MainButtonDirective, NewClientComponent],
  imports: [CommonModule, ClientsRoutingModule, ReactiveFormsModule],
})
export class ClientsModule {}
