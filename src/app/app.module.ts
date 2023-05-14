import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortadaComponent } from './components/portada/portada.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';

import { EducacionComponent } from './components/educacion/educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EdithabilidadComponent } from './components/habilidades/edithabilidad.component';
import { NewhabilidadComponent } from './components/habilidades/newhabilidad.component';
import { EditportadaComponent } from './components/portada/editportada.component';

import { provideStorage, getStorage } from '@angular/fire/storage';
import { NewsobremiComponent } from './components/sobremi/newsobremi.component';
import { EditsobremiComponent } from './components/sobremi/editsobremi.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    SobremiComponent,
    
    HabilidadesComponent,
    ContactoComponent,
    NotfoundpageComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EducacionComponent,
    EditeducacionComponent,
    EdithabilidadComponent,
    NewhabilidadComponent,
    EditportadaComponent,
    NewsobremiComponent,
    EditsobremiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    provideStorage(()=> getStorage()),
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase))
    
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
