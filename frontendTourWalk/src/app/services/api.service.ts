import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    urlApi: string = 'http://localhost:4000/api/v1';

    constructor(private http: HttpClient) {}

    postLoginUsuario(usuario: string, clave: string) {
        return this.http.post(`${this.urlApi}/login-usuario`, { email: usuario, password: clave });
    }

    postRegistrarUsuario(body:any){
        return this.http.post(`${this.urlApi}/registrar-usuario`, body )
    }
}
