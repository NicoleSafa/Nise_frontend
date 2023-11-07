import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { MostrarMascotasComponent } from './mostrar-mascotas/mostrar-mascotas.component';
import { InformacionMascotaComponent } from './informacion-mascota/informacion-mascota.component';
import { VeterinariosComponent } from './veterinarios/veterinarios.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import { RegistroProtectoraComponent } from './registro-protectora/registro-protectora.component';
import { InicioComponent } from './inicio/inicio.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { ProtectoraModule } from './protectoras-module/protectora.module';
import { MascotasModule } from './mascotas-module/mascotas.module';
import { VacunaModule } from './vacunas-module/vacuna.module';
import { VeterinarioModule } from './veterinarios-module/veterinario.module';
import { RegisterUsuarioComponent } from './register-usuario/register-usuario.component';
import { RegisterProtectoraComponent } from './register-protectora/register-protectora.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    AdopcionComponent,
    MostrarMascotasComponent,
    InformacionMascotaComponent,
    VeterinariosComponent,
    QuienesSomosComponent,
    ContactanosComponent,
    LoginRegistroComponent,
    RegistroProtectoraComponent,
    InicioComponent,
    RegisterUsuarioComponent,
    RegisterProtectoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProtectoraModule, //importo el nuevo module que he creado
    MascotasModule,
    VacunaModule,
    VeterinarioModule,

  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
