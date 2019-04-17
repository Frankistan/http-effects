import { Action } from "@ngrx/store";
import { User } from 'src/app/models/user';

export enum UserActionTypes {
	SET_USER = "[Users] Set user",
	SET_USER_FAIL = "[Users] Set user FAIL",
	SET_USER_SUCCESS = "[Users] Set user SUCCESS",
}

export class SetUser implements Action {
	readonly type = UserActionTypes.SET_USER;

	constructor(public payload: number) { }
}

export class SetUserFail implements Action {
	readonly type = UserActionTypes.SET_USER_FAIL;

	constructor(public payload: any) { }
}

export class SetUserSuccess implements Action {
	readonly type = UserActionTypes.SET_USER_SUCCESS;

	constructor(public payload: User) { }
}

export type UserActions = SetUser | SetUserFail | SetUserSuccess;