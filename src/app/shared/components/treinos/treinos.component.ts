import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.scss'],
})
export class TreinosComponent  implements OnInit {

  treinos = {
    peito: [
      {peito1: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto-com-halteres.gif'},
      {peito2: 'https://www.hipertrofia.org/blog/wp-content/uploads/2020/06/dumbbell-reverse-bench-press.gif'}, 
    ]
  }

  constructor() { }

  ngOnInit() {}

}
