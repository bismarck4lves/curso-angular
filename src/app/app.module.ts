import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyRouteParamsComponent } from './pages/study-route-params/study-route-params.component';
import { StudyQueryParamsComponent } from './pages/study-query-params/study-query-params.component';
import { StudyNestedRoutesComponent } from './pages/study-nested-routes/study-nested-routes.component';
import { PeopleComponent } from './pages/study-nested-routes/components/people/people.component';
import { CitiesComponent } from './pages/study-nested-routes/components/cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyRouteParamsComponent,
    StudyQueryParamsComponent,
    StudyNestedRoutesComponent,
    PeopleComponent,
    CitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
