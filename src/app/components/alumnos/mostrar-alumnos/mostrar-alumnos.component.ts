import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumnos';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-mostrar-alumnos',
  templateUrl: './mostrar-alumnos.component.html',
  styleUrls: ['./mostrar-alumnos.component.css']
})
export class MostrarAlumnosComponent implements OnInit {

  alumnos!: AlumnoModel[];

  constructor(
    public alumnosService:AlumnosService
  ) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos() {
    this.alumnosService.getAlumnos().subscribe(
      (res: any) => {
        console.log('datos que llegan del back =>', res);
        this.alumnos = res;
      },
      (error: HttpErrorResponse) => {
        
        console.log(error);
      }
    );
  }


}
