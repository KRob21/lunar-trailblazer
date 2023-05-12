import { ChangeDetectorRef, Component } from '@angular/core'
import { DialogService } from './shared/services/dialog.service'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'lunar-trailblazer'
	showDialog$: Observable<boolean>

	constructor(
		private dialogService: DialogService,
		private cdr: ChangeDetectorRef,
	) {
		this.showDialog$ = this.dialogService.getDialogVisibility()
		this.showDialog$.subscribe(() => {
			setTimeout(() => {
				this.cdr.detectChanges
			}, 0)
		})
	}
}
