import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from 'config/config';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class ModalService {
  //Behaviors Subjects
  
  constructor() {}


  //Funciones Modal

  openModal() {
    let modalGeneral = document.getElementById('modalGeneral') as any;
    if (modalGeneral) {
      modalGeneral.style.display = 'block';
      modalGeneral.classList.add('show');
      modalGeneral.style.backgroundColor = 'rgba(0,0,0,0.5)';
      setTimeout(() => {
        if (modalGeneral) {
          modalGeneral.style.opacity = 1;
        }
      }); //FOR TRANSITION
    }
  }

  closeModal() {
    let modalGeneral = document.getElementById('modalGeneral') as any;

    if (modalGeneral) {
      modalGeneral.style.display = 'none';
      modalGeneral.classList.remove('show');
      modalGeneral.style.opacity = 1;
    }
  }
}
