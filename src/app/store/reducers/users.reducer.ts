import { User } from 'src/app/models/user';
import { UsersActions, UsersActionTypes } from '../actions';


export interface UsersState {
	users: User[];
	loaded: boolean;
	loading: boolean;
	error: any;
}

const initialState: UsersState = {
	users: [],
	loaded: false,
	loading: false,
	error: null
}

export function usersReducer(state = initialState, action: UsersActions): UsersState {
	switch (action.type) {
		case UsersActionTypes.SET_USERS:
			return {
				...state,
				loading: true
			};

		case UsersActionTypes.SET_USERS_SUCCESS:
			return {
				...state,
				loaded: true,
				loading: false,
				users: [...action.payload]
			};
		case UsersActionTypes.SET_USERS_FAIL:
			return {
				...state,
				loaded: false,
				loading: false,
				users: [],
				error: [...action.payload]
			};
		default:
			return state;
	}
}