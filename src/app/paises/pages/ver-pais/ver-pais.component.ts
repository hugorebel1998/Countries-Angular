import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaiesService } from '../../services/paies.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais !: Country;

  constructor(
    private activate: ActivatedRoute,
    private servicePais: PaiesService
    ) { }

  ngOnInit(): void {

    this.activate.params
      .subscribe(({ id }) => {
        console.log(id);
        
        this.servicePais.getPaisCode(id)
        .subscribe(pais => {
          this.pais = pais;
          console.log(pais);
        })
      });
  }

}
