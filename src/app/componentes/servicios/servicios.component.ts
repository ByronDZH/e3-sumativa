import { Component } from '@angular/core';
import { ServiciosEmpresaService } from '../../servicios/servicio-empresa/servicio-empresa.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  serviciosinfo: any;

  constructor(private SeriviciosEmpresaSrv: ServiciosEmpresaService){

  }

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(){
    this.SeriviciosEmpresaSrv.obtenerServiciosEmpresa().subscribe(
      (response: any) => {
        this.serviciosinfo = response.servicios_empresa;
        console.log 
      }, (error) => {console.log(error);}
    );
  }
}
