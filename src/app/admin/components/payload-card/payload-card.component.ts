import { Component, Input } from '@angular/core'
import { Payload } from '../../models/payload.model'

@Component({
	selector: 'payload-card',
	templateUrl: './payload-card.component.html',
	styleUrls: ['./payload-card.component.scss'],
})
export class PayloadCardComponent {
	@Input() payload!: Payload
	constructor() {}
}
