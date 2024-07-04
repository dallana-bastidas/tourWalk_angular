import { Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'destinos', component: DestinosComponent },
    { path: 'ingreso', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'ingreso', component: LoginComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'inicio', component: InicioComponent },
];
