import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: any;

  cursos: string[] = [];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://github.com/JustinoVini';

   /* for (let i=0; i<this.cursos.length; i++) {
      let curso = this.cursos[i]
    }*/

    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit(): void {
  }

}

/*
No provider for cursosService:
Como corrigir?
O Angular precisa de mais um passo para podermos fornecer essa classe para a gente.

voltar ao cursos.module, e criar um provider: que significa fornecedor.

*/
