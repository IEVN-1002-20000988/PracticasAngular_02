import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre=''
  compradores=0
  tarjeta=0
  boletos=0
  boletosposibles = 0
  resultado=0
  textoNombre= ' '
  textoCompradores = ' '
  textoBoletos = ' '
  textoTarjeta = ' '
  textoResultado = ' '
  textoAviso = ''
  descuentoOferta= 0
  descuentoTarjeta = 0

  reiniciar(){
    location.reload();
  }

  procesar(){
    if(this.tarjeta == 0){
      this.textoAviso = 'Especifique si quiere usar tarjeta Cinepolis' 
    }else if(this.tarjeta == 1){
      this.boletosposibles = this.compradores * 7
      if(this.boletos > this.boletosposibles){
        this.textoAviso = 'El numero maximo de boletos por persona es de 7'
      }else{
        if(this.boletos > 5){
          this.descuentoOferta = (this.boletos*12)*0.15
          this.resultado = (this.boletos*12)-this.descuentoOferta
          this.descuentoTarjeta = (this.resultado)*0.10
          this.resultado = this.resultado-this.descuentoTarjeta
          this.textoNombre = 'Nombre: '+this.nombre
          this.textoCompradores = 'Numero de compradores: '+this.compradores
          this.textoBoletos = 'Boletos comprados: '+this.boletos+ ' descuento del 15%'
          this.textoTarjeta = 'Se aplico el descuento Cinepolis'
          this.textoResultado = 'El precio a pagar es de '+this.resultado
        }else if(this.boletos >= 3 && this.boletos<=5){
          this.descuentoOferta = (this.boletos*12)*0.10
          this.resultado = (this.boletos*12)-this.descuentoOferta
          this.descuentoTarjeta = (this.resultado)*0.10
          this.resultado = this.resultado-this.descuentoTarjeta
          this.textoNombre = 'Nombre: '+this.nombre
          this.textoCompradores = 'Numero de compradores: '+this.compradores
          this.textoBoletos = 'Boletos comprados: '+this.boletos+' descuento del 10%'
          this.textoTarjeta = 'Se aplico el descuento Cinepolis'
          this.textoResultado = 'El precio a pagar es de '+this.resultado
        }else{
          this.resultado = (this.boletos*12)
          this.descuentoTarjeta = (this.resultado*0.10)
          this.resultado = this.resultado - this.descuentoTarjeta
          this.textoNombre = 'Nombre: '+this.nombre
          this.textoCompradores = 'Numero de compradores: '+this.compradores
          this.textoBoletos = 'Boletos comprados: '+this.boletos+ ' sin descuento'
          this.textoTarjeta = 'Se aplico el descuento Cinepolis'
          this.textoResultado = 'El precio a pagar es de '+this.resultado
        }
      }
    }else if(this.tarjeta == 2){
      this.boletosposibles = this.compradores * 7
      if(this.boletos > this.boletosposibles){
        this.textoAviso = 'El numero maximo de boletos por persona es de 7'
      }else{
        if(this.boletos > 5){
          this.descuentoOferta = (this.boletos*12)*0.15
          this.resultado = (this.boletos*12)-this.descuentoOferta
          this.textoNombre = 'Nombre: '+this.nombre
          this.textoCompradores = 'Numero de compradores: '+this.compradores
          this.textoBoletos = 'Boletos comprados: '+this.boletos+ ' descuento del 15%'
          this.textoTarjeta = 'No se utilizo tarjeta Cinepolis'
          this.textoResultado = 'El precio a pagar es de '+this.resultado
        }else if(this.boletos >= 3 && this.boletos<=5){
          this.descuentoOferta = (this.boletos*12)*0.10
          this.resultado = (this.boletos*12)-this.descuentoOferta
          this.textoNombre = 'Nombre: '+this.nombre
          this.textoCompradores = 'Numero de compradores: '+this.compradores
          this.textoBoletos = 'Boletos comprados: '+this.boletos+' descuento del 10%'
          this.textoTarjeta = 'No se utilizo tarjeta Cinepolis'
          this.textoResultado = 'El precio a pagar es de '+this.resultado
        }else{
          this.resultado = (this.boletos*12)
          this.textoNombre = 'Nombre: '+this.nombre
          this.textoCompradores = 'Numero de compradores: '+this.compradores
          this.textoBoletos = 'Boletos comprados: '+this.boletos+' no se aplica descuento'
          this.textoTarjeta = 'No se utilizo tarjeta Cinepolis'
          this.textoResultado = 'El precio a pagar es de '+this.resultado
        }
      }
    }
  }
}
