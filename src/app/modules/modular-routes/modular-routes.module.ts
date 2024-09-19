import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModularRoutesRoutingModule } from './modular-routes-routing.module';
import { ModularScreenComponent } from './pages/modular-screen/modular-screen.component';


@NgModule({
  declarations: [
    ModularScreenComponent
  ],
  imports: [
    CommonModule,
    ModularRoutesRoutingModule
  ]
})
export class ModularRoutesModule { }
