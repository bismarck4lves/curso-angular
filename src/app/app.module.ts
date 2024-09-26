import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    WelcomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
