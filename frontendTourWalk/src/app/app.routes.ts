import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { LoginComponent } from './components/login/login.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    {path: "", component:InicioComponent},
    {path: "destinos", component:DestinosComponent},
    {path: "ingreso", component:LoginComponent},
    {path:"contacto",component:ContactoComponent}
];


