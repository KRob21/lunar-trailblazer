import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from 'firebase/auth'

interface AuthState {
	user: User | null
	id: string | null
	isLoggedIn: boolean
	name: string | null
	email: string | null
	role: 'member' | 'admin' | null
	avatar: string | null
}

const initialState: AuthState = {
	user: null,
	id: null,
	isLoggedIn: false,
	name: '',
	email: '',
	role: 'member',
	avatar: 'avatar',
}

@Injectable({
	providedIn: 'root',
})
export class AuthStore {
	private authSubject: BehaviorSubject<AuthState>

	constructor() {
		this.authSubject = new BehaviorSubject<AuthState>(initialState)
	}

	get authState$(): Observable<AuthState> {
		return this.authSubject.asObservable()
	}

	updateUser(user: User | null): void {
		const newState = {
			...this.authSubject.value,
			user,
			isLoggedIn: user !== null,
		}
		this.authSubject.next(newState)
	}
}
