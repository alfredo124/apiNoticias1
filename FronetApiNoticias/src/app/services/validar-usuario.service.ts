import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  name: string;
  apellido_p: string;
  apellido_m: string;
  correo: string;
  telefono: string;
  metodo_pago: string;
  nro_cuenta: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class ValidarUsuarioService {
  private apiUrl = 'http://localhost:8080/validarUsuario';

  constructor(private http: HttpClient) { }
  validarUsuario(correo: string, password: string): Observable<any> {
    const body = { correo, password }; // Construir el cuerpo de la solicitud
    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.apiUrl, body,httpOptions); // Realizar la solicitud POST
  }

  createUsuario(newUsuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, newUsuario, { headers });
  }
}