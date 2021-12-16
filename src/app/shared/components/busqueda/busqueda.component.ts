import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  Observable,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements AfterViewInit,OnDestroy {
  @ViewChild('input') input: ElementRef;
  @Output() emisor=new EventEmitter<string>();
  busqueda: string;
  unsubscribe$: Subject<void>=new Subject<void>();

  constructor() {}
  

  search() {
    this.emisor.emit(this.busqueda.toLowerCase())
  }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),

        distinctUntilChanged(),

        tap(() => this.search()),

        takeUntil(this.unsubscribe$)
      )

      .subscribe();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
