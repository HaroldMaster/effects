import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as fromActions from '../actions';

export interface usuarioState {
    usuario: Usuario,
    id: string,
    loaded: boolean,
    loading: boolean,
    error: {
        url: string,
        message:string,
        error:string
    },
}
export const initialStateUsuario: usuarioState = {
    usuario: new Usuario(0, '','',''),
    id: '',
    loaded: false,
    loading:false,
    error: {
        url: '',
        message: '',
        error: ''
    }
};
const _usuarioReducer = createReducer(
    initialStateUsuario,
    on(fromActions.cargarUsuario, (state,{id})=> ({...state, id})),
    on(fromActions.cargarUsuarioExitoso, (state, {usuario})=>({
        ...state,
        loading:false,
        loaded:true,
        usuario: usuario
    })),
    on(fromActions.cargarUsuarioFallido, (state, {payload})=>({
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
export function usuarioReducer(state:any, action:any) {
    return _usuarioReducer(state, action);
}