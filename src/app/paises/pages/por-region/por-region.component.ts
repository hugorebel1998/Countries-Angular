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

  regiones:string[] = ["africa", "americas", "asia", "europe","oceania"];
  regionActiva:string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  

  constructor(private paisService: PaiesService) { }

  getClassCSS(region:string):string{
    return (region === this.regionActiva)
    ? 'btn btn-primary'
    : 'btn-outline-primary';

  }

  activarRegion(region:string){
    if(region === this.regionActiva) return ;

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
    .subscribe((paises) =>{
      this.paises = paises;
    })
  }


  

}
