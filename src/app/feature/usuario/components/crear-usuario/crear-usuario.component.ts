//import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../shared/service/usuario.service'

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  idUsuario:any ;

  constructor(protected usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.construirFormularioUsuario();
  }

  crear(){
    this.idUsuario = this.usuarioService.guardarUsuario(this.usuarioForm.value);

    if(this.idUsuario > 0){
      console.log("se insertó usuario con id" || this.idUsuario)
    }
  }

  private construirFormularioUsuario() {
    this.usuarioForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
    });  
  }
  
  
}




