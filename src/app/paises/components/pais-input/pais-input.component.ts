import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  // Asi se crea un Subject
  deboucer: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit(): void {
    this.deboucer.pipe(debounceTime(300)).
    subscribe(valor =>{
      this.onDebounce.emit(valor);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);

  }
  teclaPrecionada(){
    this.deboucer.next(this.termino);

  }

}
