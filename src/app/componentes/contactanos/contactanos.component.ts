import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { ProfesionalesTecnicosService } from '../../servicios/profesional/profesional.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  formularioForm: FormGroup;
  datos_formulario: any;
  tecnicosinfo: any[] = [];

  constructor(
    private formBuild: FormBuilder,
    private solicitudFormularioSrv: SolicitudFormularioService,
    private ObtenerTecnicosSrv: ProfesionalesTecnicosService
  ) {

    this.formularioForm = this.formBuild.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.obtenerTecnicos();
  }

  enviarDatos(){
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response:any) => {
        
        this.datos_formulario = response.solicitud_formulario
        console.log(this.datos_formulario);        
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      },error => {
        console.log(error);
      }
    )   
  }

  obtenerTecnicos() {
    this.ObtenerTecnicosSrv.obtenerTecnicos().subscribe(
      (response: any) => {
        this.tecnicosinfo = response.profesionales || [];
        console.log(this.tecnicosinfo);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
