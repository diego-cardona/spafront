import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  EliminarusuarioForm: FormGroup;
  idUsuario:any ;

  constructor(protected usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.construirFormularioUsuario();
  }

  eliminar(){
    this.idUsuario = this.usuarioService.eliminar(this.EliminarusuarioForm.value);
  
    if(this.idUsuario > 0){
      console.log("se eliminó usuario con id" || this.idUsuario)
    }
  }

  private construirFormularioUsuario() {
    this.EliminarusuarioForm = new FormGroup({
      id: new FormControl('', [Validators.required])
    });  
  }

}

