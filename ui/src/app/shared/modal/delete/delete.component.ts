import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ModalTemplate, SuiModalService, TemplateModalConfig } from 'ng2-semantic-ui';
import { ActiveModal } from 'ng2-semantic-ui/dist';

@Component({
    selector: 'app-delete-modal',
    templateUrl: './delete.html',
    styleUrls: ['./delete.scss']
})
export class DeleteModalComponent {
    @Input() title: string;
    @Input() msg: string;
    @Input() autoclose = true;
    @Output() event = new EventEmitter<boolean>();

    // Ng semantic modal
    @ViewChild('myDeleteModal')
    public myDeleteModal: ModalTemplate<boolean, boolean, void>;
    modal: ActiveModal<boolean, boolean, void>;
    modalConfig: TemplateModalConfig<boolean, boolean, void>;

    loading = false;

    constructor(private _modalService: SuiModalService) { }

    show() {
        this.loading = false;
        this.modalConfig = new TemplateModalConfig<boolean, boolean, void>(this.myDeleteModal);
        this.modal = this._modalService.open(this.modalConfig);
    }

    eventAndClose() {
        this.loading = true;
        this.event.emit(true);
        if (this.autoclose) {
            this.close();
        }
    }

    close() {
        this.modal.approve(true);
    }
}
