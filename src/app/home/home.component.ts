import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'bye';
  katt = 'kattja';
  bildekatt = 'https://oskar.mangosia.com/web/data/bilder/IMG_20170612_142303462.jpg';
}
