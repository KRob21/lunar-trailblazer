import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { AuthService } from 'src/app/auth/services/auth.service'
import { AuthStore } from 'src/app/store/auth/auth.store'

@Component({
	selector: 'top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
	private authSubscription: Subscription | null = null
	public isLoggedIn = true
	constructor(
		private authService: AuthService,
		private authStore: AuthStore,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.authSubscription = this.authStore.authState$.subscribe(
			authState => {
				this.isLoggedIn = authState.isLoggedIn
			},
		)
	}
	async logout() {
		try {
			await this.authService.signOut()
		} catch (error) {
			console.error('Error during logout: ', error)
		}
	}

	ngOnDestroy(): void {
		if (this.authSubscription) {
			this.authSubscription.unsubscribe()
		}
	}
}
