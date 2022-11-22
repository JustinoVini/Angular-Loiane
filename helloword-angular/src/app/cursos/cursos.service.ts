import { Injectable } from '@angular/core';

// O que significa ? Essa classe pode ser injetada.
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //Conectar ao servidor Http

  constructor() { }

  getCursos() {
    return ['java', 'Ext JS', 'Angular'];
  }
}
// component chama o service e o service chama o backend.
