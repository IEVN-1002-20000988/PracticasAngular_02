import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-ax-b',
  templateUrl: './multiplicacion-ax-b.component.html',
  styleUrls: ['./multiplicacion-ax-b.component.css']
})
export class MultiplicacionAxBComponent {
  num1=0
  num2=0
  contador=0
  res=0
  cadena = ' '
  texto = '0'
  multiplicacion(){
    for(this.contador = 1; this.contador <= this.num1; this.contador++){
      this.res = this.res+this.num2
    }
  }
  cadenaNumeros(){
    for(this.contador = 1; this.contador<= this.num1; this.contador++){
      this.num2.toString()
      this.cadena = this.num2  + '+' + this.cadena  
    }
    this.texto = ' '
  }
  
}
