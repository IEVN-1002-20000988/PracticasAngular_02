import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})

export class TemperaturaComponent {
  num=0
  num2=0
  resultado:number=0
  resultado2:number=0
  temp=0
  temp2=0
  operacion=0

  camTemp(){
    if(this.operacion == 1){
      this.farenheit()
    }else if(this.operacion == 2){
      this.celsius()
    }
  }

  farenheit(){
    this.resultado=(this.num*1.8)+32
  }

  celsius(){
    this.resultado=(this.num-32)*5/9
  }
}
