import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export const initialState = 'todos' as filtrosValidos;

const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro),

);
 
export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}