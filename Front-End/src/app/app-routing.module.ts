import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercadeComponent } from './acercade/editacercade.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia-l/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia-l/new-experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/hardand-soft/edit-skill.component';
import { NewSkillComponent } from './components/hardand-soft/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {NgxTypedJsModule} from 'ngx-typed-js';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component:NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent },
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'edithys/:id', component: EditSkillComponent},
  {path: 'editacercade/:id', component: EditacercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgxTypedJsModule],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
