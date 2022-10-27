import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { SocialesComponent } from './components/sociales/sociales.component';
import { ExperienciaLComponent } from './components/experiencia-l/experiencia-l.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardandSoftComponent } from './components/hardand-soft/hardand-soft.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import {  HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { InterceptorProvider } from './service/interceptor-service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AcercadeComponent,
    SocialesComponent,
    ExperienciaLComponent,
    EducacionComponent,
    HardandSoftComponent,
    ProyectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
