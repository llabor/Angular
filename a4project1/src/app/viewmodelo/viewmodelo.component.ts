import { Component } from '@angular/core';
import { Temperatura } from '../modelos/temperatura.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent {

  temp1 = new Temperatura("28001", "Madrid", 18, '2018');
  temp2 = new Temperatura("38001", "Tenerife", 21, '2018');
  temp3 = new Temperatura("28001", "Madrid", 18, '2018');

  temps = [this.temp1, this.temp2, this.temp2];

}
