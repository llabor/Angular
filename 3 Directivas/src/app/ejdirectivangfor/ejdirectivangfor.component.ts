import { Component, OnInit } from '@angular/core';

import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent implements OnInit {

  cursos: string[];

  alumnos: Array<Alumno> = [
    {id: 1, nombre: 'Ezequiel', apellidos: 'Llarena Borges', ciudad: 'Madrid'}
  ];

  constructor() {
    this.cursos = ['Angular', 'HTML', 'CSS'];
  }

  ngOnInit() {
  }

}
