import { Injectable } from '@angular/core'
import {
	ActivatedRouteSnapshot,
	CanActivate,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router'
import { getAuth } from 'firebase/auth'
import { Observable } from 'rxjs'
import { DialogService } from '../shared/services/dialog.service'

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	auth = getAuth()
	constructor(private dialogService: DialogService) {}

	async canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Promise<boolean> {
		const user = await this.auth.currentUser
		const isLoggedIn = !!user
		if (!isLoggedIn) {
			this.dialogService.showDialog(
				'error',
				'Not Logged IN',
				'you must be logged in',
			)
			console.error('not logged in')
		}
		return isLoggedIn
	}
}
