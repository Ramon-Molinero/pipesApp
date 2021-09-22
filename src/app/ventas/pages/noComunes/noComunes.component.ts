import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-noComunes',
  templateUrl: './noComunes.component.html',
  styleUrls: ['./noComunes.component.scss'],
})
export class NoComunesComponent {
  //i18nselect
  femName: string = 'Althea';
  maleName: string = 'Ramón';

  femGender: string = 'femenino';
  maleGender: string = 'masculino';

  mapping = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // Ejecicio i18Select

  name: string = 'Evaristo';
  gender: string = 'masculino';

  selectMapping = {
    masculino: 'Estimado',
    femenino: 'Estimada',
  };

  //i18nplural

  clientes: string[] = [];
  clientes2: string[] = ['Pedro', 'Maria', 'Juan'];
  clientesMapping = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  // Ejercicio i18Plural

  personas: string[] = ['Juan', 'Pedro', 'Maria', 'Elias', 'David'];

  personasMapping = {
    '=0': 'no hay ninguna persona esperando',
    '=1': 'hay una persona esperando',
    other: 'hay # personas esperando',
  };

  //KeyValuePipe
  persona = {
    nombre: 'Jaime',
    edad: 39,
    direccion: 'Coslada, MAD',
    altura: '180 cm',
    complexión: 'Delgada',
    peso: '72 kg',
    raza: 'caucasica',
  };

  heroes = [
    {
      nombre: 'Batman',
      poder: 'Dinero',
    },
    {
      nombre: 'Lobezno',
      poder: 'Curación',
    },
    {
      nombre: 'Magneto',
      poder: 'Control metales',
    },
    {
      nombre: 'Tormenta',
      poder: 'Control Elementos',
    },
    {
      nombre: 'Wonder Woman',
      poder: 'Amazona',
    }
  ];

  // AsynPipe

  obs = interval(1000); // 0,1,2,3,4,5...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos un valor de promesa');
    }, 3500);
  });

  changeName() {
    if (this.gender === 'masculino') {
      this.name = 'María';
      this.gender = 'femenino';
    } else {
      this.name = 'Evaristo';
      this.gender = 'masculino';
    }
  }

  deletePersona() {
    this.personas.pop();
  }
}
