import { ConditionalExpr } from '@angular/compiler';
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss']
})
export class FormNewItemComponent {

  @Input() className = 'btn-primary';
  @Input() Label !: string;
  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item : string) : void{
    console.log("item ->",item);
    this.newItemEvent.emit(item);
  }



}
