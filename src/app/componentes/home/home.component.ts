
import { Component, OnInit } from '@angular/core';

import { WeatherService } from 'src/app/servicios/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ubicacion: any;
  localidad: any;
  apiUrl: any = 'https://api.openweathermap.org/geo/1.0/direct?q=';
  apiConf: any =
    ',buenos%20aires,ar&limit=5&appid=bd9c22a52cd4798f4a301517813a7d2a';
  concatenacionUrlApi: any;
  apiUbicacion: any =
    'https://api.openweathermap.org/geo/1.0/direct?q=monte%20grande,buenos%20aires,ar&limit=5&appid=bd9c22a52cd4798f4a301517813a7d2a';
  
  
  
  apiClima: any= 'https://api.openweathermap.org/data/2.5/weather?lat=-34.603683&lon=-58.381557&appid=bd9c22a52cd4798f4a301517813a7d2a&units=metric'
  lat: any;
  lon: any;
  climarUrl: any='https://api.openweathermap.org/data/2.5/weather?'
  climaConf:any ='&appid=bd9c22a52cd4798f4a301517813a7d2a&units=metric'
  concatenacionApiClima:any 
  datosDelClima: any;
  
  ngOnInit(): void {
    
    this.weatherService.obtenerClima('https://api.openweathermap.org/data/2.5/weather?lat=-34.603683&lon=-58.381557&appid=bd9c22a52cd4798f4a301517813a7d2a&units=metric').subscribe((data) => {
      this.datosDelClima = data;
      console.log(this.datosDelClima);
    });
    
  }

  /**Funcion para obtner la localidad */
  buscarUbicacion(localidad: any) {
    this.localidad = localidad;
    this.concatenacionUrlApi = `${this.apiUrl}${this.localidad}${this.apiConf}`;

    /*************UBICACION*************/
    this.weatherService
      .obtenerUbicacion(this.concatenacionUrlApi)
      .subscribe((lugar) => {
        this.ubicacion = lugar;
        this.lat = lugar[0].lat;
        this.lon = lugar[0].lon;
        console.log(this.lat, this.lon);
        this.concatenacionApiClima = `${this.climarUrl}lat=${this.lat}&lon=${this.lon}${this.climaConf}`
        console.log("res url clima"+ this.concatenacionApiClima)
      });


      this.weatherService.obtenerClima(this.concatenacionApiClima).subscribe((data) => {
        this.datosDelClima = data;
        console.log(this.datosDelClima);
        
      })
      
  
  
  
    }


/********************************/

  ar:any 
  busqueda(){
    this.ar = ["ezeiza", "lanus", "monte grande"]
    console.log(this.ar)
  }
  
  
 
 lugarSeleccionado:any
  seleccionarLugar(a:any){
    this.lugarSeleccionado = a
   this.ar = ''
   
  }
  
  
  
}
