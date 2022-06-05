import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from 'src/app/servicios/weather.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  inputSearch = new FormControl('');
  resultadosBusqueda: any;
  dia1 = {
    dt: 0,
    temp: {
      min: '',
      max: '',
    },
  };
  dia2 = {
    dt: 0,
    temp: {
      min: '',
      max: '',
    },
  };
  dia3 = {
    dt: 0,
    temp: {
      min: '',
      max: '',
    },
  };
  dia4 = {
    dt: 0,
    temp: {
      min: '',
      max: '',
    },
  };
  apiClima = {
    current: {
      temp: '',
      humidity: '',
      wind_speed: '',
      pressure: '',
    },
  };
  apiGeo = {
    name: 'Ezeiza',
    state: 'Buenos aires',
    country: 'AR',
  };
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.datosPredeterminados('https://api.openweathermap.org/data/2.5/onecall?lat=-34.8548948&lon=-58.525839&appid=bd9c22a52cd4798f4a301517813a7d2a&units=metric')
  }

  datosPredeterminados(d: any) {
    this.weatherService.obtenerClimaPredeterminado(d).subscribe((data) => {
      console.log(data)
      this.apiClima = data;
      this.dia1 = data.daily[0];
      this.dia2 = data.daily[1];
      this.dia3 = data.daily[2];
      this.dia4 = data.daily[3];
    })
  }

  buscar(inputSearch: any) {
    this.weatherService.Ubicacion(inputSearch).subscribe((data) => {
      this.resultadosBusqueda = data;
    });
  }
  ubicacionSeleccionada(lugar: any) {
    this.weatherService.obtenerClima(lugar).subscribe((data) => {
      this.apiGeo = lugar;
      console.log(lugar)
      this.apiClima = data;
      this.dia1 = data.daily[0];
      this.dia2 = data.daily[1];
      this.dia3 = data.daily[2];
      this.dia4 = data.daily[3];
      this.resultadosBusqueda = [];
    });
  }
}

//Api ubicacion:
//'https://api.openweathermap.org/geo/1.0/direct?q=monte%20grande,buenos%20aires,ar&limit=5&appid=bd9c22a52cd4798f4a301517813a7d2a'

//Api Clima:
//'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=bd9c22a52cd4798f4a301517813a7d2a&units=metric'
