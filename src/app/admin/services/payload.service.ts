import { Injectable } from '@angular/core'
import { Payload } from '../models/payload.model'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, map, of, tap, throwError } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class PayloadService {
	private payloads: Payload[] = [
		{
			id: 'y8z0As',
			name: 's mores Campfire',
			icon: 'smores-campfire',
			price: 120,
			promo: 'limited',
			description:
				'a combination of graham cracker and toasted marshmallow ice cream with chunks of chocolate and graham crackers.',
		},
		{
			id: '3u98Kl',
			name: 'Matcha Madness',
			icon: 'matcha-madness',
			price: 129,
			promo: 'new',
			description:
				'green tea flavored ice cream with swirls of sweet red bean paste and crushed mochi.',
		},
		{
			id: 'ae098s',
			name: 'Bourbon Pecan Pie',
			icon: 'bourbon-pecan-pie',
			price: 149,
			promo: 'limited',
			description:
				' a blend of bourbon and vanilla ice cream with chunks of pecan pie and a caramel swirl.',
		},
		{
			id: '8amkZ9',
			name: 'PB&J',
			icon: 'peanutbutterandjelly',
			price: 139,
			promo: 'new',
			description:
				'peanut butter ice cream with chunks of strawberry jam and a swirl of grape jelly.',
		},
		{
			id: 'l3M0nz',
			name: 'Spicy Chocolate',
			icon: 'spicy-chocolate',
			price: 129,
			description:
				' dark chocolate ice cream with a kick of cayenne pepper and chunks of spicy chocolate.',
		},
		{
			id: '8amkZ9',
			name: 'Lemon Meringue Pie',
			icon: 'lemon-meringue-pie',
			price: 139,
			promo: 'new',
			description:
				'lemon ice cream with chunks of meringue and graham cracker crust.',
		},
		{
			id: 'l3M0nz',
			name: 'Tiramisu',
			icon: 'tiramisu',
			price: 129,
			description:
				'espresso and mascarpone ice cream with chunks of ladyfingers and a chocolate swirl.',
		},
	]

	constructor(private http: HttpClient) {}

	read() {
		if (this.payloads.length) {
			return of(this.payloads)
		}
		return this.http.get<Payload[]>(`api/payloads`).pipe(
			tap(payloads => {
				this.payloads = payloads
			}),
			// retryWhen((errors) => {
			//     return errors.pipe(delay(5000), take(2));
			// })
			// catchError(this.handleError)
		)
	}
	readOne(id: string | null) {
		return this.read().pipe(
			map(payloads => {
				const payload = payloads.find(
					(payload: Payload) => payload.id === id,
				)

				if (payload) {
					return payload
				}

				return { name: '', icon: '', price: 0, description: '' }
			}),
			catchError(this.handleError),
		)
	}

	create(payload: Payload) {
		return this.http.post<Payload>('/api/donuts', payload).pipe(
			tap(payload => {
				this.payloads = [...this.payloads, payload]
			}),
			catchError(this.handleError),
		)
	}

	update(payload: Payload) {
		return this.http
			.put<Payload>(`/api/payloads/${payload.id}`, payload)
			.pipe(
				tap(payload => {
					this.payloads = this.payloads.map((item: Payload) => {
						if (item.id === payload.id) {
							return payload
						}
						return item
					})
				}),
				catchError(this.handleError),
			)
	}

	delete(payload: Payload) {
		return this.http.delete<Payload>(`/api/payloads/${payload.id}`).pipe(
			tap(() => {
				this.payloads = this.payloads.filter(
					(payload: Payload) => payload.id !== payload.id,
				)
			}),
			catchError(this.handleError),
		)
	}

	private handleError(err: HttpErrorResponse) {
		if (err.error instanceof ErrorEvent) {
			// client-side
			console.warn('Client', err.message)
		} else {
			// server-side
			console.warn('Server', err.status)
		}
		console.warn(err)
		return throwError(() => new Error(err.message))
	}
}
