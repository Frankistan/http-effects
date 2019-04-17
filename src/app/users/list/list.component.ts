import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { SetUsers } from 'src/app/store/actions';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	users$: Observable<User[]>;
	loading: boolean = true;
	error: any;

	constructor(
		private store: Store<AppState>
	) { }

	ngOnInit() {
		this.store.dispatch(new SetUsers());
		this.users$ = this.store.select('users')
			.pipe(
				map(state => {
					this.loading = state.loading;
					this.error = state.error;
					return state.users;
				})
			);
	}

}
