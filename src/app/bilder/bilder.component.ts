import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bilder',
  templateUrl: './bilder.component.html',
  styleUrls: ['./bilder.component.css']
})
export class BilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  b = 'bilder';
  bsrc = [
    {src:"https://oskar.mangosia.com/web/data/bilder/drone/DJI_0016.jpg"},
    {src: "https://oskar.mangosia.com/web/data/bilder/drone/DJI_0017.jpg"},
    {src: "https://oskar.mangosia.com/web/data/bilder/drone/DJI_0018.jpg"}
  ];
}
