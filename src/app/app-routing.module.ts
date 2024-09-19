import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudyQueryParamsComponent } from './pages/study-query-params/study-query-params.component';
import { StudyRouteParamsComponent } from './pages/study-route-params/study-route-params.component';
import { NestedRoutesComponent } from './pages/nested-routes/nested-routes.component';
import { PeopleComponent } from './pages/nested-routes/components/people/people.component';
import { CitiesComponent } from './pages/nested-routes/components/cities/cities.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthChildrenGuard } from './guards/auth-children.guard';
import { ConfirmToExitCaseComponent } from './pages/confirm-to-exit-case/confirm-to-exit-case.component';
import { OutGuard } from './guards/out.guard';
import { LoadGuard } from './guards/load.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'nested',
    component: NestedRoutesComponent,
    canActivateChild: [AuthChildrenGuard],
    children: [
      { path: 'people', component: PeopleComponent },
      { path: 'cities', component: CitiesComponent },
    ],
  },
  { path: 'query-params', component: StudyQueryParamsComponent , canActivate: [AuthGuard]},
  { path: 'route-params/:page', component: StudyRouteParamsComponent },
  {
    path: 'modular-routes',
    loadChildren: () =>
      import('./modules/modular-routes/modular-routes.module').then(
        (m) => m.ModularRoutesModule
      ),
    canLoad: [LoadGuard]
  },
  {
    path: 'confirmation',
    component: ConfirmToExitCaseComponent,
    canDeactivate: [OutGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
