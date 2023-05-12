import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	OnDestroy,
} from '@angular/core'
import { DialogService } from '../../services/dialog.service'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit, OnDestroy {
	@ViewChild('dialog') dialog!: ElementRef
	title: string = ''
	description: string = ''
	private ngUnsubscribe = new Subject<void>()

	constructor(private dialogService: DialogService) {}

	ngOnInit(): void {
		this.dialogService
			.getDialog()
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe(dialog => {
				this.title = dialog.title
				this.description = dialog.description
				this.dialog.nativeElement.showModal()
			})
	}

	ngOnDestroy() {
		this.ngUnsubscribe.next()
		this.ngUnsubscribe.complete()
	}

	close(): void {
		this.dialog.nativeElement.close()
		this.dialogService.hideDialog()
	}
}
