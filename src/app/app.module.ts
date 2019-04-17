import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { UsersModule } from './users/users.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { appReducers } from './store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects';
// import { AppEffects } from './app.effects';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		UsersModule,
		HttpClientModule,
		// StoreModule.forRoot(reducers, { metaReducers }),
		StoreModule.forRoot( appReducers ),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot(effectsArr),
	],
	providers: [
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
