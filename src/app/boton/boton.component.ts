import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-boton',
  template: `<button [ngStyle]="{'background-color': color}">{{label}}</button>`,
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit, OnChanges,OnDestroy {

  @Input() color !: string;
  @Input() label !: string;
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes->", changes);
  }
  ngOnDestroy(): void {
    console.log("Destroy");
  }

  ngOnInit(): void {
    console.log("Init");
  }

}
