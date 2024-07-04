import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GestionReservaComponent } from './components/admin/gestion-reserva/gestion-reserva.component';

export const routes: Routes = [
    { path: "", component:InicioComponent},
    { path: "destinos", component:DestinosComponent},
    { path: "ingreso", component:LoginComponent},
    { path: "registro", component: RegistroComponent },
    { path: "ingreso", component:LoginComponent},
    { path: "contacto",component:ContactoComponent},
    { path: "admin/reservas", component:GestionReservaComponent}
];



