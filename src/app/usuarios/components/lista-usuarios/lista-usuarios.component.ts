import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios!: Observable<any>;
  error!: Observable<any> 
 /* public users !: Observable<any>;
  constructor(private userService : UsuarioService) { }

  ngOnInit(): void {
    this.users =  this.userService.getUsers();
  }*/
  constructor(private store: Store<AppState>){}
  ngOnInit(){
    this.usuarios = this.store.select('usuarios').pipe(
      map(e=> e.usuario)
    )
    this.error = this.store.select('usuarios').pipe(
      map(e => {
          return e.error.message;
      })
    )
    this.store.dispatch(cargarUsuarios());
  }

}
