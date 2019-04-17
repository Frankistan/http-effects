import { User } from 'src/app/models/user';
import { UserActions, UserActionTypes } from '../actions';


export interface UserState {
	user: User;
	loaded: boolean;
	loading: boolean;
	error: any;
}

const initialState: UserState = {
	user: null,
	loaded: false,
	loading: false,
	error: null
}

export function userReducer(state = initialState, action: UserActions): UserState {
	switch (action.type) {
		case UserActionTypes.SET_USER:
			return {
				...state,
				loading: true,
				error: null
			};

		case UserActionTypes.SET_USER_SUCCESS:
			return {
				...state,
				loaded: true,
				loading: false,
				user: {...action.payload}
			};
		case UserActionTypes.SET_USER_FAIL:
			return {
				...state,
				loaded: false,
				loading: false,
				error: {
					status: action.payload.status,
					message: action.payload.message,
					url: action.payload.url
				}
			};
		default:
			return state;
	}
}