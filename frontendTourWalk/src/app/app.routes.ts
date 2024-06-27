import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {path: "", component:InicioComponent},
    {path: "destinos", component:DestinosComponent},
    {path: "ingreso", component:LoginComponent}
];

