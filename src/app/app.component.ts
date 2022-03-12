import { Component, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnChanges, OnInit, OnDestroy{


  cities = ['Barcelona','Madrid','Valencia'];
  name !: string;
  title = 'tst1';
  selection !: string;

  ngOnInit(): void {
    console.log('OnInit->');
  }

  ngOnChanges(changes:SimpleChanges):void{
    console.log('Change->', changes);
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  onCityClicked(city : string){
    console.log('City->',city);
    this.selection = city;
  }

  onCityClear(){
    this.selection = "";
  }

}
