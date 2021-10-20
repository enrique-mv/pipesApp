import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "enrique";
  nombreUpper: string = "ENRIQUE";
  nombreCompleto: string = "EnRiqUE moRENo";

  fecha: Date = new Date();



}
