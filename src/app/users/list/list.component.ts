import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import { SetUsers } from 'src/app/store/actions';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	users$: Observable<User>;

	constructor(
		private users: UserService,
		private store: Store<AppState>
	) { }

	ngOnInit() {
		// this.users$ = this.users.list()
		// 	.pipe(
		// 		filter(users => !!users),
		// 		map(res => res['data'])
		// 	);
		this.store.dispatch( new SetUsers()); 
	}

}
