import { Injectable } from '@angular/core'
import { Subject, BehaviorSubject, Observable } from 'rxjs'

interface Dialog {
	type: 'success' | 'error'
	title: string
	description: string
}

@Injectable({
	providedIn: 'root',
})
export class DialogService {
	private dialogSubject = new Subject<Dialog>()
	private dialogState = new BehaviorSubject<boolean>(false)

	showDialog(type: 'success' | 'error', title: string, description: string) {
		this.dialogState.next(true)
		this.dialogSubject.next({ type, title, description })
	}
	hideDialog(): void {
		this.dialogState.next(false)
	}

	getDialogVisibility(): Observable<boolean> {
		return this.dialogState.asObservable()
	}

	getDialog() {
		return this.dialogSubject.asObservable()
	}
}
