import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css'],
})
export class AddEditModalComponent implements OnInit {
  constructor(private srvModal: ModalService) {}

  public tipoFormulario: string = '';
  titleModal: string = '...';

  ngOnInit() {
    
  }

  cerrarModal() {
    this.srvModal.closeModal();
  }
}
