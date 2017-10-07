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

  b = 'bilder';
  akra(){
    this.h3tekst="Akra";
  }
  bsrc = [
    {src:"https://oskar.mangosia.com/web/data/bilder/drone/DJI_0016.JPG"},
    {src: "https://oskar.mangosia.com/web/data/bilder/drone/DJI_0017.JPG"},
    {src: "https://oskar.mangosia.com/web/data/bilder/drone/DJI_0018.JPG"}
  ];
}
