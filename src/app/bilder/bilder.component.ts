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
    {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png"},
    {src: "https://camo.githubusercontent.com/7e97b9c10423e06bf6f91e971d8a9cec5926adfe/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667"}
  ];
}
