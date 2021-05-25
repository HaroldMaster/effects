import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as fromActions from '../actions/usuarios.actions';

export interface UsuariosState {
    usuario: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: {
        url: string,
        message:string,
        error:string
    },
}
export const initialState: UsuariosState = {
    usuario: [],
    loaded: false,
    loading:false,
    error: {
        url: '',
        message: '',
        error: ''
    }
};
const _usuariosReducer = createReducer(
    initialState,
    on(fromActions.cargarUsuarios, state=> ({...state, loading: true})),
    on(fromActions.cargarUsuariosExitoso, (state, {usuarios})=>({
        ...state,
        loading:false,
        loaded:true,
        usuario: usuarios
    })),
    on(fromActions.cargarUsuariosFallido, (state, {payload})=>({
        ...state,
        loading:false,
        loaded:false,
        error: {
            url : payload.url,
            message: payload.message,
            error: payload.error
        }
    })),
);
export function usuariosReducer(state:any, action:any) {
    return _usuariosReducer(state, action);
}