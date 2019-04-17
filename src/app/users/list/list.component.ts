import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	users$: Observable<User>;

	constructor(
		private users: UserService
	) { }

	ngOnInit() {
		this.users$ = this.users.list()
			.pipe(
				filter(users => !!users),
				map(res => res['data'])
			);
	}

}
