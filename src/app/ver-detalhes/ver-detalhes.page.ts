import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-detalhes',
  templateUrl: './ver-detalhes.page.html',
  styleUrls: ['./ver-detalhes.page.scss'],
})
export class VerDetalhesPage {

  paises: any;

  constructor() { 
    this.getPaisDetalhes();
  }

  getPaisDetalhes(){ 
    // fetch(`https://restcountries.com/v3.1/alpha/${history.state.codigo}`)
    fetch(`https://restcountries.com/v3.1/name/brazil`)
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
