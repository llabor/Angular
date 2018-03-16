import { Injectable } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


/* Implementación sugerida para validar claves: mediante petición HTTP */

@Injectable()
export class AutenticacionService {

  conectado: boolean = false;

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute) { }

  registroUsuario(userdata) {
    // persistir 'userdata' en servidor de BD o en algún servicio
  }

  inicioSesion(email, password) {
  	if(email == 'admin@company.com' && password == 'abc123') {
  		this.conectado = true;
  		this.router.navigate(['/']);
  	}
  }

  isAuthenticated() {
  	if(this.conectado)
  		return true;
  	else
  		return false;
  }

}
