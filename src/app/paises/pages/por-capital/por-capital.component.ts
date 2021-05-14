import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaiesService } from '../../services/paies.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaiesService) { }

  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
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
