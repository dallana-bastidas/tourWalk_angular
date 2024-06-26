import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    formLogin: FormGroup;
    regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    constructor(
        private fb: FormBuilder,
        private _apiServicio: ApiService,
    ) {
        this.formLogin = this.fb.group({
            email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
            password: ['', Validators.required],
        });
    }

    loginUsuarioSistema() {
        this._apiServicio.postLoginUsuario(this.formLogin.value.email, this.formLogin.value.password).subscribe((data) => {
            console.log(data);
        });
    }
}
