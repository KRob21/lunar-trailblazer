import { Injectable } from '@angular/core'
import {
	ActivatedRouteSnapshot,
	CanActivate,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router'
import { getAuth } from 'firebase/auth'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	auth = getAuth()

	async canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Promise<boolean> {
		const user = await this.auth.currentUser
		const isLoggedIn = !!user
		if (!isLoggedIn) {
			console.error('not logged in')
		}
		return isLoggedIn
	}
}
