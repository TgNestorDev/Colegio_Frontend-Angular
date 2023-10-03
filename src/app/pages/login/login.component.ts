import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
// import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;

  status!: boolean;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.myForm = this.fb.group({  // método que espera un objeto
      usuario: ['',[Validators.required]],
      contrasenia: ['',[Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  Login(){
    this.loginService.postLogin(this.myForm.value).subscribe((res) => {
      console.log('se tuvo los datos en login', res);
      this.router.navigate(['sistema/alumnos']);
    },
    (error: HttpErrorResponse) => {
        console.log(error.error.info);
        const Toast = Swal.mixin({  //Generar una alerta en la parte superior de la pantalla
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({   //Datos que llevará la alerta en la parte superior de la pantalla
          icon: 'error',
          title:error.error.info
        })
    }
    );
  }

}