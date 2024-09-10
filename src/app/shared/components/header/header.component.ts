import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  
menu = {
  logo: 'https://cdn1.iconfinder.com/data/icons/dompicon-glyph-fitness-diet/256/exercise-dumbbells-gym-fitness-diet-512.png',
  itens: [
    {icone: 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_home_48px-512.png', texto: 'Inicio'},
    {icone: 'https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_info_48px-256.png', texto: 'Sobre'}, 
    {icone: 'https://cdn1.iconfinder.com/data/icons/essential-user-interface-glyph/32/essential_glyph_20-512.png', texto: 'Galeria'},
    {icone: 'https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-03-512.png', texto: 'Contato'},
  ]
}
constructor(){
    
}

ngOnInit(): void {
  
}


}
