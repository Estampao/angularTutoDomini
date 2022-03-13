import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{


  cities = ['Barcelona','Madrid','Valencia'];
  name !: string;
  title = 'tst1';
  selection !: string;

  addNewCity(city : string): void {
    this.cities.push(city);
  }

  onCityClicked(city : string):void{
    console.log('City->',city);
    this.selection = city;
  }

  onCityClear(){
    this.selection = "";
  }

}
