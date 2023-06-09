import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { HomeNineroComponent } from './components/home-ninero/home-ninero.component';
import { ServicesComponent } from './components/services/services.component';
import { FormServicioComponent } from './components/form-servicio/form-servicio.component';
import { MessageSolicitudComponent } from './components/message-solicitud/message-solicitud.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat'
import { enviroment } from 'src/enviroments/enviroments';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    ContainerComponent,
    HomeComponent,
    RegisterComponent,
    ForgotPassComponent,
    HomeNineroComponent,
    ServicesComponent,
    FormServicioComponent,
    MessageSolicitudComponent,
    VerificarCorreoComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

