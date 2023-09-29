import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'button-modal',
  templateUrl: './button-modal.component.html',
  styleUrls: ['./button-modal.component.css'],
})
export class ButtonModalComponent implements AfterViewInit {
  //obteniendo contenido y confirmaciond eicono del boton
  @Input() contenido: string = 'none';
  @Input() conIcono: boolean = true;
  @Input() icono: string = 'none';
  @Input() color: string = 'var(--color-black)';
  @Input() titleModal: string = '...';
  @Input() tipoModal: string = '';
  @Input() cuadrado: boolean = false;
  @Input() darkMode: boolean = false;

  // capturando elementos  del padre
  @ViewChild('btnc') btnc!: ElementRef;
  @ViewChild('icono') icon!: ElementRef;

  // elementos del element form
  elementForm: {
    formulario: string;
    data: any;
    title: any;
  } = { formulario: 'nuevoAlumno', data: {}, title: 'Titulo de Modal' };

  constructor(private srvModal: ModalService) {}

  seleccionarInput(_tipoForm: string) {
    this.elementForm.formulario = _tipoForm;
    this.elementForm.title = this.titleModal;
    this.srvModal.setForAlumno(this.elementForm);
    this.srvModal.openModal();
  }

  ngAfterViewInit(): void {
    this.btnc.nativeElement.style.backgroundColor = this.color;

    if (!this.conIcono) {
      this.icon.nativeElement.style.display = 'none';
    } else {
      this.icon.nativeElement.style.display = 'block';
      this.icon.nativeElement.innerHTML = this.icono;
    }

    if (this.icono === 'edit' || this.icono === 'delete') {
      this.icon.nativeElement.style.fontSize = '15px';
    }

    if (this.cuadrado === true) {
      this.btnc.nativeElement.classList.add('cuadrado');
    }

    if (this.darkMode) {
      this.btnc.nativeElement.classList.add('dark-mode');
    }
  }
}
