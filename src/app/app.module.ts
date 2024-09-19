import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyContainerComponent } from './components/study-container/study-container.component';
import { HomeComponent } from './pages/home/home.component';
import { StudyQueryParamsComponent } from './pages/study-query-params/study-query-params.component';
import { StudyRouteParamsComponent } from './pages/study-route-params/study-route-params.component';
import { NestedRoutesComponent } from './pages/nested-routes/nested-routes.component';
import { PeopleComponent } from './pages/nested-routes/components/people/people.component';
import { CitiesComponent } from './pages/nested-routes/components/cities/cities.component';
import { ConfirmToExitCaseComponent } from './pages/confirm-to-exit-case/confirm-to-exit-case.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyContainerComponent,
    HomeComponent,
    StudyQueryParamsComponent,
    StudyRouteParamsComponent,
    NestedRoutesComponent,
    PeopleComponent,
    CitiesComponent,
    ConfirmToExitCaseComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [StudyContainerComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
