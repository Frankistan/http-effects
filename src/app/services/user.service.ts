import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private http: HttpClient
	) { }

	list():Observable<User[]>{
		return this.http
			.get(`${environment.API_BASE_URL}/users?per_page=6`)
			.pipe(
				map(res => res['data'])
			);
	}

	create(){
		
	}
	
	read(id:string){
		return this.http
			.get(`${environment.API_BASE_URL}/users/${id}`)
			.pipe(
				map(res => res['data'])
			);
	}

	update(){}

	delete(){}
}
