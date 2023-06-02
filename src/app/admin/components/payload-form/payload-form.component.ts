import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Payload } from '../../models/payload.model'

@Component({
	selector: 'payload-form',
	templateUrl: './payload-form.component.html',
	styleUrls: ['./payload-form.component.scss'],
})
export class PayloadFormComponent {
	@Input() payload!: Payload
	@Input() isEdit!: Boolean

	@Output() create = new EventEmitter<Payload>()
	@Output() update = new EventEmitter<Payload>()
	@Output() delete = new EventEmitter<Payload>()

	icons: string[] = [
		'smores-campfire',
		'matcha-madness',
		'bourbon-pecan-pie',
		'peanutbutterandjelly',
		'spicy-chocolate',
		'lemon-meringue-pie',
		'tiramisu',
	]
	constructor() {}
	handleCreate(form: NgForm) {
		if (form.valid) {
			this.create.emit(form.value)
		} else {
			form.form.markAllAsTouched()
		}
	}
	handleUpdate(form: NgForm) {
		if (form.valid) {
			this.update.emit({ id: this.payload.id, ...form.value })
		} else {
			form.form.markAllAsTouched()
		}
	}
	handleDelete() {
		if (confirm(`Really delete ${this.payload.name}?`)) {
			this.delete.emit({ ...this.payload })
		}
	}
}
