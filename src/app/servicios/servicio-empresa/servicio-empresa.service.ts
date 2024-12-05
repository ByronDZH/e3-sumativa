import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEmpresaService {
  backend = environment.backend+"/servicio-empresa";
  
  constructor(private http: HttpClient) { }

  obtenerServiciosEmpresa(){
    return this.http.get(`${this.backend}/obtener-servicios-empresa`)
  }
}