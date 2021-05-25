import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction('[Uruarios] cargar');
export const cargarUsuariosExitoso = createAction('[Uruarios] cargaExitosa',
props<{usuarios: Usuario[]}>()
);
export const cargarUsuariosFallido = createAction('[Uruarios] cargaFallida',
props<{payload: any}>()
);