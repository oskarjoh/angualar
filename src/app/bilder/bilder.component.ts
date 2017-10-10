import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-bilder',
  templateUrl: './bilder.component.html',
  styleUrls: ['./bilder.component.css']
})
export class BilderComponent implements OnInit {
  h3tekst ='bilder fra dronen min';
  constructor() { }

  ngOnInit() {
  }
  test = 2;
  selectedEntry;
  public entries = [
    {
      id: 1,
      description: "verdi 1"
    },
    {
      id: 2,
      description: "verdi 2"
    }
  ];
  b = 'bilder';
  input1 = '';
  akra(){
    this.h3tekst="Akra";
  }
  // skal velge vilken bilder som blir vist
  bid2(entry){
    this.selectedEntry = entry;
    if (this.selectedEntry.id == 1) {
      this.h3tekst="if funker";
    }
    else if (this.selectedEntry.id == 2) {
      this.h3tekst="bilder fra dronen min";
    }
  }

  bsrc = [
    {src:"https://oskar.mangosia.com/web/data/bilder/drone/DJI_0016.JPG"},
    {src: "https://oskar.mangosia.com/web/data/bilder/drone/DJI_0017.JPG"},
    {src: "https://oskar.mangosia.com/web/data/bilder/drone/DJI_0018.JPG"}
  ];
}