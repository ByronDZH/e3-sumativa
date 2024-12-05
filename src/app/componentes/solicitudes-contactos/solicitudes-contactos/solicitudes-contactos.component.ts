import { Component } from '@angular/core';
import { SolicitudFormularioService } from '../../../servicios/solicitud-formulario/solicitud-formulario.service';

@Component({
  selector: 'app-solicitudes-contactos',
  templateUrl: './solicitudes-contactos.component.html',
  styleUrl: './solicitudes-contactos.component.css'
})
export class SolicitudesContactosComponent {

  solicitudes_formulario:any;
  datosModal = {
    nombre:String,
    mensaje:String
  }

  constructor(private solicitudFormularioSrv:SolicitudFormularioService){
  }

  ngOnInit(){
  }

  obtenerSolicitudesFormulario(){
    this.solicitudFormularioSrv.obtenerSolicitudesFormulario().subscribe(
      (response:any) => {        
        this.solicitudes_formulario = response.solicitud_formulario;          
        console.log(this.solicitudes_formulario);
      }, error => {
        console.log(error);
      }
    )
  }

  verMensajeEnModal(solicitudContacto:any){
    this.datosModal.nombre = solicitudContacto.nombre;
    this.datosModal.mensaje = solicitudContacto.mensaje;
  }

  eliminarSolicitudFormulario(_id:string){
    this.solicitudFormularioSrv.eliminarSolicitudesFormulario(_id).subscribe(
      (response:any) => {        
        if(response.profesional.deletedCount == 1){
          console.log(response.profesional);
          alert("Registro eliminado correctamente");
          this.obtenerSolicitudesFormulario()
        }else{
          alert("No se pudo eliminar, algo paso");
        }
      }, error => {
        console.log(error);
      }
    )
  }
}
