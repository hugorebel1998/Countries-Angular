import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaiesService {

  //URL para hacer buscada por paises
  private apiUrl: string = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) {
  }

  buscarPais(termino: string): Observable<Country[]> {

    const params = new HttpParams()
    .set("fields" , "callingCodes;flag;capital;population;alpha2Code");

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, {params});

  }

  buscarCapital(termino: string): Observable<Country[]> {
    const params = new HttpParams()
    .set("fields" , "callingCodes;flag;capital;population;alpha2Code");

    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url, {params});

  }

  getPaisCode(id: string): Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }


  buscarRegion(region: string): Observable<Country[]> {

    const params = new HttpParams()
    .set("fields","callingCodes;flag;capital;population;alpha2Code");

    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, {params})
    .pipe(
      tap(console.log)
    )

  }

  
}
