import { Component, OnInit } from '@angular/core';
import { IncrementerService } from '../../services/incrementer.service';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss'],
})
export class IncrementerComponent{

  constructor(
    public incrementServices: IncrementerService){ }

  decrement(){
    if (this.incrementServices.valor > 0)
    this.incrementServices.valor --;
   }
  increment(){ 
    this.incrementServices.valor++;
  }
}
