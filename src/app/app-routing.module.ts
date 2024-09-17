import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyRouteParamsComponent } from './pages/study-route-params/study-route-params.component';
import { StudyQueryParamsComponent } from './pages/study-query-params/study-query-params.component';
import { StudyNestedRoutesComponent } from './pages/study-nested-routes/study-nested-routes.component';
import { PeopleComponent } from './pages/study-nested-routes/components/people/people.component';
import { CitiesComponent } from "./pages/study-nested-routes/components/cities/cities.component";

const routes: Routes = [
  {
    path: 'route-params/:page',
    component: StudyRouteParamsComponent,
  },
  {
    path: 'query-params',
    component: StudyQueryParamsComponent,
  },
  {
    path: 'nested',
    component: StudyNestedRoutesComponent,
    children: [
      { path: 'people', component: PeopleComponent },
      { path: 'cities', component: CitiesComponent },
    ],
  },
  { 
    path: 'modular-routes', 
    loadChildren: () => import('./modules/modular-routes/modular-routes.module').then(m => m.ModularRoutesModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
