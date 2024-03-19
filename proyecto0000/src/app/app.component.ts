import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArComponent } from './ar/ar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto0000';
  catalogo = ["fresa", "pera", "sandia", "durazno", "plátano", "mandarina", "arándano"];
  dia = 6;
  datos = [
    {
      id: 1,
      nombre: "fernando",
      apellido: "flores",
      edad: 22
    },
    {
      id: 2,
      nombre: "carlos",
      apellido: "torres",
      edad: 30
    },
    {
      id: 3,
      nombre: "mari",
      apellido: "andrade",
      edad: 22
    }
  ];

  contador = 1;
  inc(){
    this.contador++
  }
  dec() {
    this.contador--
  }

  src = "";

  valor1: number = this.aleatorio();
  valor2: number = this.aleatorio();
  valor3: number = this.aleatorio();
  resultado: String = "";

  aleatorio() {
    return (Math.floor(Math.random() * 4)+1)
  }
  tirar() {
    this.valor1 = this.aleatorio();
    this.valor2 = this.aleatorio();
    this.valor3 = this.aleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = "Gano";
    } else {
      this.resultado = "Perdio";
    }
  }


} 
