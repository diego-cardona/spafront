import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';


@Injectable()
export class UsuarioService {

  private consultaUsuariosUrl = "http://localhost:8080/usuarios";
  constructor(protected http: HttpService) {}

  public consultarUsuarios(): Observable<Usuario[]> {
    return this.http.doGetSingle<Usuario[]>(this.consultaUsuariosUrl);
  }

  public consultar() {
    return this.http.doGet<Usuario[]>(this.consultaUsuariosUrl, this.http.optsName('consultar usuarios'));
  }

  public guardar(usuario: Usuario) {
    return this.http.doPost<Usuario, boolean>(`${environment.endpoint}/usuarios`, usuario,
                                                this.http.optsName('crear/actualizar usuarios'));
  }

  public eliminar(usuario: Usuario) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/usuarios/${usuario.id}`,
                                                 this.http.optsName('eliminar usuarios'));
  }
}