import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaiesService } from '../../services/paies.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaiesService) { }

  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarRegion(termino)
      .subscribe((paises) => {
        this.paises = paises;
        console.log(paises);

      }, (error) => {
        this.hayError = true;
        this.paises = [];
        // console.info(error);
      });
  }
  

}
