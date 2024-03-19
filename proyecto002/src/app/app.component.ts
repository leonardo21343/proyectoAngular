import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'proyecto002';

  valor1: number=(Math.floor(Math.random()*6)+1);
  valor2: number=(Math.floor(Math.random()*6)+1);
  valor3: number=(Math.floor(Math.random()*6)+1);
  resultado : String=""

  tirar() {
    this.valor1 = (Math.floor(Math.random()*6)+1);
    this.valor2 = (Math.floor(Math.random()*6)+1);
    this.valor3 = (Math.floor(Math.random()*6)+1);
    if (this.valor1 === this.valor2 && this.valor1 === this.valor3) {
      this.resultado = "Gano";
    } else {
      this.resultado = "Perdio";
    }
  }

}
