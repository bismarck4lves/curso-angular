import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModularRoutesRoutingModule } from './modular-routes-routing.module';
import { ModularScreenComponent } from './pages/modular-screen/modular-screen.component';
import { StudyContainerComponent } from '../../components/study-container/study-container.component';

@NgModule({
  declarations: [ModularScreenComponent, StudyContainerComponent],
  imports: [
    CommonModule, ModularRoutesRoutingModule],
})
export class ModularRoutesModule {}
