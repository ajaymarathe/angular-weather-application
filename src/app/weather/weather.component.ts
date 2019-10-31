import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

   ApiKey = '4feacdc24883114d65702291baae6fcf';

  constructor() { }

  ngOnInit() {
    console.log();
  }

}
