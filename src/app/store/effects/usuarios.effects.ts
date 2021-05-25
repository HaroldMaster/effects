import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cargarUsuarios, cargarUsuariosExitoso, cargarUsuariosFallido } from '../actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class usuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}
  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarUsuarios),
      tap((data) => console.log('tap', data)),
      mergeMap(() => this.usuarioService.getUsers()
      .pipe(
          map(usuarios=> cargarUsuariosExitoso({usuarios})),
          catchError(err=> of(cargarUsuariosFallido({payload: err})))
      )
      )
    )
  );
}
