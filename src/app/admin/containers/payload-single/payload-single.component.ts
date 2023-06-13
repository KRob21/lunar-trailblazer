import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { PayloadService } from '../../services/payload.service'
import { Payload } from '../../models/payload.model'

@Component({
	selector: 'payload-single',
	templateUrl: './payload-single.component.html',
	styleUrls: ['./payload-single.component.scss'],
})
export class PayloadSingleComponent implements OnInit {
	payload!: Payload
	isEdit!: Boolean

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private payloadService: PayloadService,
	) {}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id')

		this.payloadService
			.readOne(id)
			.subscribe((payload: Payload) => (this.payload = payload))
		this.isEdit = this.route.snapshot.data['isEdit']
		console.log('payload: ', this.payload)
	}

	onCreate(payload: Payload) {
		this.payloadService
			.create(payload)
			.subscribe(payload =>
				this.router.navigate(['admin', 'payloads', payload.id]),
			)
	}

	onUpdate(payload: Payload) {
		this.payloadService.update(payload).subscribe({
			next: () => this.router.navigate(['admin']),
			error: err => console.log('onUpdate error: ', err),
		})
	}

	onDelete(payload: Payload) {
		console.log('delete: ', payload)
	}
}
