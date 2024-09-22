import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.scss'],
})
export class TreinosComponent  implements OnInit {

  treinos = {
    braco: [
      {exercicio: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/rosca-biceps-com-pegada-fechada-na-barra-tradicional.gif'},
      {exercicio: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/11/03081301-crucifixo-com-halteres.gif'},
   ],
    peito: [
      {exercicio: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto-com-halteres.gif'},
      {exercicio: 'https://www.hipertrofia.org/blog/wp-content/uploads/2020/06/dumbbell-reverse-bench-press.gif'}, 
    ],
    costas: [
      {exercicio: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-unilateral-com-halter-serrote-no-banco.gif'},
      {exercicio: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-curvada-.gif'},
    ],
    perna: [
      {exercicio: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/06/agachamento-com-salto-pernas-e-panturrilhas.gif'},
      {exercicio: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-afundo-tradicional-sem-pesos.gif'},
    ]
  }

  constructor() { }

  ngOnInit() {}

}
