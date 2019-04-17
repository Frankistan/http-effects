import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/services/user.service';
import { UserActionTypes, SetUserSuccess, SetUserFail } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class UserEffects {

	constructor(
		private actions$: Actions,
		public users: UserService

	) { }

	@Effect()
	loadUser$ = this.actions$
		.pipe(
			ofType(UserActionTypes.SET_USER),
			switchMap( action => {
				return this.users.read(action['payload'])
				.pipe(
					map( (user:any) => new SetUserSuccess(user)),
					catchError( error => {
						return of(new SetUserFail(error));
					})
				);
			}) 
		);
}
