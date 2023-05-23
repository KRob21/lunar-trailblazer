import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/auth/services/auth.service'
import { AuthStore } from 'src/app/store/auth/auth.store'
import { Subscription } from 'rxjs'

interface User {
	id: string
	name: string
	role: 'member' | 'admin'
	avatar: string
	email: string
}

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
	user: User | null = null
	private authSubscription: Subscription | null = null

	constructor(
		private authService: AuthService,
		private router: Router,
		private authStore: AuthStore,
	) {}

	ngOnInit(): void {
		this.authSubscription = this.authStore.authState$.subscribe(
			authState => {
				if (authState.user) {
					this.user = {
						id: authState.user.uid,
						name: 'Khalid Robinson',
						role: 'admin',
						avatar: authState.avatar!,
						email: 'me@we.com',
					}
				} else {
					this.user = null
				}
			},
		)
	}

	async signOut() {
		try {
			await this.authService.signOut()
			console.log('sign out successful')
			this.router.navigate(['auth/login'])
		} catch (error) {
			console.error('sign out error: ', error)
		}
	}
	ngOnDestroy(): void {
		if (this.authSubscription) {
			this.authSubscription.unsubscribe()
		}
	}
}
