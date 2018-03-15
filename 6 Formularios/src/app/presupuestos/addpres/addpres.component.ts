import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent implements OnInit {

  //objeto del formulario en el que se almacenan los valores de los campos
  presupuestoForm: FormGroup;

  // objeto del componente donde almacenaremos con formato JSON cada presupuesto obtenido 
  // a través del objeto de formulario 'presupuestoForm'
  presupuesto: any;

  constructor(private pf: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.presupuestoForm = this.pf.group({
      proveedor: '',
      fecha: '',
      concepto: '',
      base: '',
      tipo: '',
      iva: '',
      total: ''
    }); 
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
  }

  savePresupuesto() {

    const subTotal = this.presupuestoForm.get('base').value * this.presupuestoForm.get('tipo').value;
    
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this. presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: subTotal,
      //iva: this.presupuestoForm.get('iva').value, 
      total: this.presupuestoForm.get('total').value 
    };
    return savePresupuesto;
  }

  ngOnInit() {
  }

}
