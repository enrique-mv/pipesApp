import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Enrique";
  genero: string = "masculino";

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Enrique', 'Andrea', 'Isaac'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente() {
    this.nombre = "Andrea";
    this.genero = "femenino"
  }

  borrarCliente() {
    this.clientes.shift();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Enrique',
    edad: '28',
    direccion: 'Chihuahua, Mexico'
  }

  //JSON Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  //Async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos Data de una promesa' );
    }, 3500);

  });
}
