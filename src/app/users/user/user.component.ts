import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { SetUser } from 'src/app/store/actions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	user$: Observable<User>;
	id: any;
	loading: boolean = true;
	error: any;


	constructor(
		private route:ActivatedRoute,
		private store: Store<AppState>
	) { }

	ngOnInit() {
		// const id = this.route.snapshot.params['id'];
		this.route.params.subscribe( params => {
			this.id = params['id'];
			this.store.dispatch( new SetUser(this.id));
		});
		
		this.user$ = this.store.select('user')
			.pipe(
				map( state => {
					this.loading = state.loading;
					this.error = state.error;
					return state.user
				})
			);
	}

}
