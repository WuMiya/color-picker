import { Component } from '@angular/core';
import { ColorEvent } from 'ngx-color';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean= false;
  public recentChoose: any[] = [];
  selectedColour:any ="";
  reuseColour:any ="";

  cpPresetColors: any[] = ["#ea4256", "#ffa500", "#ffc966", "#f67d3b", "#43e5fd", "#20a5e6", "#1F917A", "#8B572A", 
    "#000000","#4A4A4A", "#ffffff", "#9B9B9B"];


  onSelect(colour) {
    this.selectedColour = colour;
  
    if (this.recentChoose.includes(this.selectedColour) === false) {
      this.recentChoose.unshift(this.selectedColour);
    } else {
      const index = this.recentChoose.findIndex( c => c === this.selectedColour)
      this.recentChoose.splice(index,1);
      this.recentChoose.unshift(this.selectedColour);
    }

    if (this.recentChoose.length > 6){
      this.recentChoose.splice(-1,1);
    }
  }

  title = 'app';
  primaryColor = '#194D33';
  state = {
    h: 150,
    s: 0.50,
    l: 0.20,
    a: 1,
  };

  changeComplete($event: ColorEvent) {
    this.state = $event.color.hsl;
    this.primaryColor = $event.color.hex;
  }

  reuseCol(recentCol) {
    this.selectedColour = recentCol;
    const index = this.recentChoose.findIndex( c => c === this.selectedColour)
    this.recentChoose.splice(index,1);
    this.recentChoose.unshift(this.selectedColour);
  }

}

class showColourPicker {
  show: boolean = true;
}


