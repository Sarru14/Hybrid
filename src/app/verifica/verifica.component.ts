import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifica',
  // templateUrl: './verifica.component.html',
  template:`<p>verifica works! and this is Angular 14 {{name}}</p>`,
  styleUrls: ['./verifica.component.css']
})
export class VerificaComponent implements OnInit {

  constructor() {}

  ngOnInit(): void{
  }

  name = 'Funziona'

}
