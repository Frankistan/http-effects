import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsersActionTypes } from '../actions';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UsersEffects {

	constructor(
		private actions$: Actions
	) { }

	@Effect({ dispatch:false})
	loadUsers$ = this.actions$
		.pipe(
			ofType(UsersActionTypes.SET_USERS),
			map( action => {
				console.log('accion: ',action);
				return action;
			})
		);
}
