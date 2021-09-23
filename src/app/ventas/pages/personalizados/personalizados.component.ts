import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-personalizados',
  templateUrl: './personalizados.component.html',
  styleUrls: ['./personalizados.component.scss'],
})
export class PersonalizadosComponent implements OnInit {
  isUpperCase: boolean = false;

  orderBy: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Batman',
      poder: 'Dinero',
      color: Color.negro,
    },
    {
      nombre: 'Daredevil',
      poder: 'Visión sonar',
      color: Color.rojo,
    },
    {
      nombre: 'Lobezno',
      poder: 'Regeneración',
      color: Color.amarillo,
    },
    {
      nombre: 'Thor',
      poder: 'Dios del Trueno',
      color: Color.azul,
    },
    {
      nombre: 'Hulk',
      poder: 'Indestructible',
      color: Color.verde,
    },
  ];
  constructor() {}

  ngOnInit() {}

  changeUppercase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  sortList(value: string): void{
    this.orderBy = value;
  }
}
