import { BehaviorSubject, Observable } from 'rxjs'
import { User } from 'firebase/auth'

interface AuthState {
	user: User | null
	isLoggedIn: boolean
}

const initialState: AuthState = {
	user: null,
	isLoggedIn: false,
}

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
