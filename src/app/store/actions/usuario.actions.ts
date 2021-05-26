import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction('[Uruario] cargar', props<{id:string}>());
export const cargarUsuarioExitoso = createAction('[Uruario] cargaExitosa',
props<{usuario: Usuario}>()
);
export const cargarUsuarioFallido = createAction('[Uruario] cargaFallida',
props<{payload: any}>()
);