import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Rodriguez Pablo';
  edad = 40;
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo() {
    if (this.activo === true) {
      return "Trabajador Activo";
    } else {
      return "Trabajador Inactivo";
    }
  }

  mostrasSueldo() {
    let suma = 0;
    for (let i = 0; i < this.sueldos.length; i++) {
      suma += this.sueldos[i];
    }
    return suma;
  }
}
