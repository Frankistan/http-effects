import { UsersState, usersReducer } from './users.reducer';
import { ActionReducerMap } from '@ngrx/store';



export interface AppState{
	users: UsersState
}

export const appReducers:ActionReducerMap<AppState> = {
	users: usersReducer
}
