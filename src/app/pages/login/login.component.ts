import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    
  }

}
