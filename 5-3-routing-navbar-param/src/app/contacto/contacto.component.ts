import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    public titulo = 'Contactos';
    public parametro;

  /* Inyectamos en el constructor los objetos/servicios para recoger los
    parámetros de la URL */
  constructor(
    private ruta: ActivatedRoute,
    private router: Router
  ) {}

  /* Función callback para recorrer los parámetros de las URLs
     mediante el método 'forEach' del router */
  ngOnInit() {
    /* Función de flecha para poder acceder globalmente a los parámetros
       dentro de la función de callback */
    this.ruta.params.forEach((params: Params) => {
        this.parametro = params['id'];
    });
  }

  /* Redirijimos a través del método 'navigate' del router */
  redirect() {
    this.router.navigate(['/contacto', 'Sin parámetros']);
  }
}
