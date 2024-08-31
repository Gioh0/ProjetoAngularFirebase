import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-pais',
  templateUrl: './detalhes-pais.page.html',
  styleUrls: ['./detalhes-pais.page.scss'],
})
export class DetalhesPaisPage {

  paises: any;

  constructor() { 
    this.getPaisDetalhes();
  }

  getPaisDetalhes(){ 
    // fetch(`https://restcountries.com/v3.1/alpha/${history.state.codigo}`)
    fetch(`https://restcountries.com/v3.1/alpha/${history.state.codigo}`)
    .then( dados => dados.json() ) // converter json
    .then(dados => {
      console.log(dados);
      this.paises = dados;
    })
    .catch(_ => {
      console.log(_);
    })
    .finally(()=> {
      console.log('Finalizado!');
    })
  }


}
