import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ListarUsuarioComponent} from './components/listar-usuario/listar-usuario.component'
import { EliminarUsuarioComponent } from './components/eliminar-usuario/eliminar-usuario.component';


const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: 'crear',
        component: CrearUsuarioComponent
      },
      
      {
        path: 'listar',
        component: ListarUsuarioComponent
      },
      {
        path: 'borrar',
        component: EliminarUsuarioComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }