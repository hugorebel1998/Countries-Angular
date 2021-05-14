import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaiesService } from '../../services/paies.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent{
  
  termino: string = "";
@Input()  paises: Country[] = [];
@Input()  capitales: Country[] = [];


  
  constructor(private paisService: PaiesService) { }

}
