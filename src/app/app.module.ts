import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
// Import Firebase functions and environment configuration
import { initializeApp } from '@firebase/app'
import { getAnalytics } from '@firebase/analytics'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { AuthGuard } from './guards/auth.guard'
import { TopBarComponent } from './shared/components/top-bar/top-bar.component'

@NgModule({
	declarations: [AppComponent, TopBarComponent],
	imports: [BrowserModule, AppRoutingModule, AuthModule],
	providers: [AuthGuard],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor() {
		// Initialize Firebase
		initializeApp(environment.firebaseConfig)
		getAnalytics()
	}
}
