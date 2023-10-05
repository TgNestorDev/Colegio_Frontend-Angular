import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  rolUsuario!: string;
  nombreUsuarion!: string;


  constructor(
    private route:Router
  ) {}

  ngOnInit(): void {
    const token = (localStorage.getItem('token') as string);
    const datos:{sub: any}= decode(token); //El rol del usuario viene en la variable sub
    this.rolUsuario=datos.sub;
    this.nombreUsuarion= (localStorage.getItem('usuario') as string);
  }

  clickMobileMenu() {
    const sidebar = document.getElementById('sidebar__main_component');
    if (sidebar) {
      sidebar.classList.toggle('close');
    }
  }

  clickMobileMenuProfile() {
    // .bottom_menu__mobile__complete_screen
    const bottomMenu = document.querySelector(
      '.bottom_menu__mobile__complete_screen'
    );

    if (bottomMenu) {
      bottomMenu.classList.toggle('open');
    }
  }

  // Cerrar sesión
  cerrarSeccion() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.route.navigate(['/']);
  }
}
