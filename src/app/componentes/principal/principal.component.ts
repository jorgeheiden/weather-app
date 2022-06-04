import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from 'src/app/servicios/weather.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {

  inputSearch = new FormControl('')

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  buscar(ciudad:any){
    console.log(ciudad)
    this.weatherService.Ubicacion(ciudad).subscribe((data) =>{
      console.log(data[0])
    })
    
  }

}

//Api ubicacion:
//'https://api.openweathermap.org/geo/1.0/direct?q=monte%20grande,buenos%20aires,ar&limit=5&appid=bd9c22a52cd4798f4a301517813a7d2a'

//Api Clima:
//'https://api.openweathermap.org/data/2.5/weather?lat=-34.603683&lon=-58.381557&appid=bd9c22a52cd4798f4a301517813a7d2a&units=metric'
