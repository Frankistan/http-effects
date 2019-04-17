import { Action } from "@ngrx/store";
import { User } from 'src/app/models/user';

export enum UsersActionTypes {
	SET_USERS = "[Users] Set users",
	SET_USERS_FAIL = "[Users] Set users FAIL",
	SET_USERS_SUCCESS = "[Users] Set users SUCCESS",
}

export class SetUsers implements Action {
	readonly type = UsersActionTypes.SET_USERS;
}

export class SetUsersFail implements Action {
	readonly type = UsersActionTypes.SET_USERS_FAIL;

	constructor(public payload: any) { }
}

export class SetUsersSuccess implements Action {
	readonly type = UsersActionTypes.SET_USERS_SUCCESS;

	constructor(public payload: User[]) { }
}

export type UsersActions = SetUsers | SetUsersFail | SetUsersSuccess;