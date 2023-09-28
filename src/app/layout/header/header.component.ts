import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  listaRoles: any = [];

  constructor() {}

  ngOnInit(): void {
    this.listaRoles = [
      { id: 1, nombre: 'Administrador' },
      { id: 2, nombre: 'Usuario' },
      { id: 3, nombre: 'Invitado' },
    ];
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
    //this.casclient.Logout();
  }
}
