import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../shared/model/usuario';
import {UsuarioService } from '../../shared/service/usuario.service'

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  listaUsuarios: Observable<Usuario[]>;

  constructor(protected usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listaUsuarios = this.usuarioService.consultarUsuarios();
  }

}
