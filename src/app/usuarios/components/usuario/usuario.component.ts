import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import {selectUsuario} from '../../../store/selectors/usuario.selector'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario!: Observable<Usuario>;
  error!: Observable<any>;
  usuarioBusqueda !: {
    id: string,
    name: string,
    last_name:string,
    avatar:string
  }
  
  constructor(private store: Store<AppState>, private router: ActivatedRoute){
    
   /* this.store.pipe(
      select(selectUsuario),
      tap(u=> console.log('U',u)),
      map(usr => {
        this.usuarioBusqueda = {
          id: usr.id+'',
          name: usr.first_name,
          last_name: usr.last_name,
          avatar: usr.avatar
        }
      })
    )*/
  }
  ngOnInit(){
    
    this.router.params.subscribe(params=>{
      this.store.dispatch(cargarUsuario({id: params.id}));
    }
    )
    
    this.usuario = this.store.select('usuario').pipe(
      map((e)=> e.usuario)
    )

    this.error = this.store.select('usuario').pipe(
      map(e => {
          return e.error.message;
      })
    )
      
      
    }

}
