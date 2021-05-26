import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cargarUsuario, cargarUsuarioExitoso, cargarUsuarioFallido, cargarUsuarios, cargarUsuariosExitoso, cargarUsuariosFallido } from '../actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class usuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {
  }
  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarUsuario),
      //tap((data) => console.log('tap usuario', data)),
      mergeMap((action) => this.usuarioService.getUserById(action.id)
      .pipe(
          map(usuario=> cargarUsuarioExitoso({usuario: usuario})),
          catchError(err=> of(cargarUsuarioFallido({payload: err})))
      )
      )
    )
  );
}
