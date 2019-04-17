import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private http: HttpClient
	) { }

	list():Observable<User>{
		return this.http.get<User>(`${environment.API_BASE_URL}/users?per_page=6`);
	}

	create(){
		
	}
	
	read(){
		
	}

	update(){}

	delete(){}
}
