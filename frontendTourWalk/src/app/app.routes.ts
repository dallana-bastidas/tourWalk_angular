import { Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PacificoComponent } from './components/destinos/pacifico/pacifico.component';
import { AmazoniaComponent } from './components/destinos/amazonia/amazonia.component';
import { AtlanticoComponent } from './components/destinos/atlantico/atlantico.component';
import { AndinaComponent } from './components/destinos/andina/andina.component';
import { PlanificaComponent } from './components/planifica/planifica.component';
import { PacificoslideComponent } from './components/planifica/pacificoslide/pacificoslide.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'destinos', component: DestinosComponent },
    { path: 'ingreso', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'ingreso', component: LoginComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'pacifico', component: PacificoComponent },
    {path: 'atlantico', component: AtlanticoComponent},
    {path: 'amazonia', component: AmazoniaComponent},
    {path: 'andina', component: AndinaComponent},
    {path: 'planifica', component: PlanificaComponent},
    {path: 'pacificoslide', component: PacificoslideComponent},

];
