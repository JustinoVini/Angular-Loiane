import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  // @Input('nome') nomeCurso: string = ''; // é possivel passar por parametro o nome da variavel que será usada no html
  @Input() nome: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
