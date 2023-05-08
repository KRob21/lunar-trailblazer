import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/auth/services/auth.service'

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
	constructor(private authService: AuthService, private router: Router) {}

	async signOut() {
		try {
			await this.authService.signOut()
			console.log('sign out successful')
			this.router.navigate(['auth/login'])
		} catch (error) {
			console.error('sign out error: ', error)
		}
	}
}
