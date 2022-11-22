import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: any = 'http://github.com';

  cursoAngular: boolean = true;

  urlDaImg: any = 'https://pixabay.com/photos/road-forest-fall-autumn-season-1072823/';

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
