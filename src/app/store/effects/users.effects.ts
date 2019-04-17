import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/services/user.service';
import { UsersActionTypes, SetUsersSuccess, SetUsersFail } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}
}

@Injectable({
	providedIn: 'root'
})
export class UsersEffects {

	constructor(
		private actions$: Actions,
		public users: UserService

	) { }

	// @Effect({ dispatch:false})
	@Effect()
	loadUsers$ = this.actions$
		.pipe(
			ofType(UsersActionTypes.SET_USERS),
			switchMap( () => {
				return this.users.list()
				.pipe(
					map( (users:any) => new SetUsersSuccess(users)),
					catchError( error => {
						return of(new SetUsersFail(error));
					})
				);
			}) 
		);
}
