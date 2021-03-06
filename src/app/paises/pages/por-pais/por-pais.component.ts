import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaiesService } from '../../services/paies.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    
    `
  ]
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaiesService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe((paises) => {
        this.paises = paises;
        console.log(paises);

      }, (error) => {
        this.hayError = true;
        this.paises = [];
        // console.info(error);
      });
  }
  sugerencia(termino: string) {
    this.hayError = false;
    // TODO:Crar sugerencia
    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,4),
        (err)=> this.paisesSugeridos = []
        
    );
    
  }

}
