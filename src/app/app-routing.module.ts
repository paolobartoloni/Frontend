import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EdithabilidadComponent } from './components/habilidades/edithabilidad.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NewhabilidadComponent } from './components/habilidades/newhabilidad.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { EditportadaComponent } from './components/portada/editportada.component';
import { PortadaComponent } from './components/portada/portada.component';
import { EditsobremiComponent } from './components/sobremi/editsobremi.component';
import { NewsobremiComponent } from './components/sobremi/newsobremi.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';


//rutas de navegacion
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'portada', component: PortadaComponent},
  {path: 'editportada/:id', component: EditportadaComponent},
  {path: 'sobremi', component: SobremiComponent},
  {path: 'nuevosobremi', component: NewsobremiComponent},
  {path: 'editsobremi/:id', component: EditsobremiComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaeduc', component: NewEducacionComponent},
  {path: 'editeducacion/:id', component: EditeducacionComponent},
  {path: 'nuevahabilidad', component: NewhabilidadComponent},
  {path: 'edithabilidad/:id', component: EdithabilidadComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: NotfoundpageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
