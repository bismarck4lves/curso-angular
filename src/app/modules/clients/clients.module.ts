import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './pages/clients/clients.component';
import { MainButtonDirective } from '../financial/directives/main-button.directive';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { CepFormComponent } from './pages/new-client/components/cep-form/cep-form.component';
import { PreviewFormComponent } from './pages/new-client/components/preview-form/preview-form.component';

@NgModule({
  declarations: [ClientsComponent, MainButtonDirective, NewClientComponent, CepFormComponent, PreviewFormComponent],
  imports: [CommonModule, ClientsRoutingModule, ReactiveFormsModule],
})
export class ClientsModule {}
