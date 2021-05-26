import { createSelector} from '@ngrx/store' 
import { AppState } from '../app.reducers';
import { usuarioState } from '../reducers/usuario.reducer';

export const selectUsuario = createSelector((state: AppState)=>state.usuario , (state: usuarioState)=> state.usuario);