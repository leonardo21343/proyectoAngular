import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ar',
  standalone: true,
  imports: [],
  templateUrl: './ar.component.html',
  styleUrl: './ar.component.css'
})
export class ArComponent {
 numero = this.random();
 random() {
  return (Math.floor(Math.random() * 4)+1);
 }

 @Input() valor: String = "";

}
