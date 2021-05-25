import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaUsuariosComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }
