import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { ContainerComponent } from './components/container/container.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { ServicesComponent } from './components/services/services.component';
import { FormServicioComponent } from './components/form-servicio/form-servicio.component';
import { MessageSolicitudComponent } from './components/message-solicitud/message-solicitud.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  { path: '', redirectTo: 'container', pathMatch: 'full' },
  { path: 'container', component: ContainerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nav', component: NavComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'forgotPass', component: ForgotPassComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'pedirServicio', component: FormServicioComponent},
  { path: 'messageServicio', component: MessageSolicitudComponent},
  { path: 'verificarCorreo', component: VerificarCorreoComponent},
  { path: '**', redirectTo: 'container', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
