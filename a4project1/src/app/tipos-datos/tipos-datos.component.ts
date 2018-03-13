import { Component } from '@angular/core';

@Component({
  selector: 'app-tipos-datos',
  templateUrl: './tipos-datos.component.html',
  styleUrls: ['./tipos-datos.component.css']
})

export class TiposDatosComponent {
  nombre: String = 'Echeyde';
  edad: Number = 77;
  mayorDeEdad: Boolean = true;
  telefonos: Array<any> = [91123123, '123456789', false];
}
