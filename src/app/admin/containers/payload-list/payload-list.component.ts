import { Component, OnInit } from '@angular/core'

import { PayloadService } from '../../services/payload.service'
import { Payload } from '../../models/payload.model'

@Component({
	selector: 'payload-list',
	templateUrl: './payload-list.component.html',
	styleUrls: ['./payload-list.component.scss'],
})
export class PayloadListComponent implements OnInit {
	payloads!: Payload[]

	constructor(private payloadService: PayloadService) {}

	ngOnInit(): void {
		this.payloadService
			.read()
			.subscribe((payloads: Payload[]) => (this.payloads = payloads))
	}
	trackById(index: number, value: Payload) {
		return value.id
	}
}
