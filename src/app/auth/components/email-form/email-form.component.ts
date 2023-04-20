import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { NgForm } from '@angular/forms'

export interface EmailLoginForm {
	name: string
	email: string
	password: string
	agreeToTerms: boolean
	rememberMe: boolean
}

@Component({
	selector: 'email-form',
	templateUrl: './email-form.component.html',
	styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
	@Output() formSubmit = new EventEmitter<{
		type: string
		data: EmailLoginForm
	}>()

	constructor() {}

	ngOnInit(): void {}

	type = 'login'

	changeType(val: any) {
		this.type = val
	}

	get isLogin() {
		return this.type === 'login'
	}

	get isSignup() {
		return this.type === 'signup'
	}

	handleSubmit(form: NgForm) {
		const formData = form.value
		if (form.valid) {
			if (formData.formType === 'login') {
				this.formSubmit.emit({ type: 'login', data: form.value })
			} else if (formData.formType === 'signup') {
				this.formSubmit.emit({ type: 'signup', data: form.value })
			}
			form.resetForm()
		} else {
			form.form.markAllAsTouched()
		}
	}
}
