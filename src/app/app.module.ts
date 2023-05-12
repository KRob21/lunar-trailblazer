import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { provideAuth, getAuth } from '@angular/fire/auth'
import {
	provideAnalytics,
	getAnalytics,
	ScreenTrackingService,
	UserTrackingService,
} from '@angular/fire/analytics'
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthGuard } from './guards/auth.guard'
import { TopBarComponent } from './shared/components/top-bar/top-bar.component'
import { AuthStore } from './store/auth/auth.store';
import { DialogComponent } from './shared/components/dialog/dialog.component'

@NgModule({
	declarations: [AppComponent, TopBarComponent, DialogComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAnalytics(() => getAnalytics()),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
	],
	providers: [
		AuthGuard,
		AuthStore,
		ScreenTrackingService,
		UserTrackingService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
