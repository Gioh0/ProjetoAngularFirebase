import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {


  tenis: any = {
    nome: null,
    cliente: null,
    produto: null,
    descricao : null
  }

  constructor() { 
    this.getTenis();
  }

  ngOnInit() {
  }

  salvar({
    this.crudService.insert(this.get.tenis)
  })

  getTenis(){
    this.crudService.fetchAll('');
    .then(resp =>{
      console.log(resp);
    })
  }

}
