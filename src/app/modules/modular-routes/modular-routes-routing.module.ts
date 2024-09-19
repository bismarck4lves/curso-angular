import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModularScreenComponent } from './pages/modular-screen/modular-screen.component';

const routes: Routes = [
  {
    path: '',
    component: ModularScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModularRoutesRoutingModule {}
