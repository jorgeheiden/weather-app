import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GeolocalizacionService } from 'src/app/servicios/geolocalizacion.service';
import { WeatherService } from 'src/app/servicios/weather.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  inputSearch = new FormControl('');
  resultadosBusqueda: any;
  iconoHoy:any
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
      weather:[
        { icon: "a"}
      ]
    },
  };
  
  apiGeo = {
    name: 'Ezeiza',
    state: 'Buenos aires',
    country: 'AR',
  };
  
  constructor(
    private weatherService: WeatherService,
    private geolocalizacionservice: GeolocalizacionService
  ) {}

  ngOnInit(): void {
    //Se llama a la funcion datos predeterminados y se le pasa como parametro un lugar
    this.datosPredeterminados(
      'https://api.openweathermap.org/data/2.5/onecall?lat=-34.8548948&lon=-58.525839&appid=bd9c22a52cd4798f4a301517813a7d2a&units=metric'
    );
    
  }

  //Funcion que asinga datos del clima predeterminados al cargar la pagina
  datosPredeterminados(d: any) {
    this.weatherService.obtenerClimaPredeterminado(d).subscribe((data) => {
      this.apiClima = data;
      this.asignacionDeIconos(this.apiClima)
      this.dia1 = data.daily[0];
      this.dia2 = data.daily[1];
      this.dia3 = data.daily[2];
      this.dia4 = data.daily[3];
    });
  }
  //Recibe los datos del input y obtiene un objeto con los datos del lugar(nombre, lat, lon)
  buscar(inputSearch: any) {
    this.weatherService.Ubicacion(inputSearch).subscribe((data) => {
      this.resultadosBusqueda = data;
      console.log(data)
    });
  }
  //Recibe la ubicacion seleccionada de los resultados de busqueda
  //obtinene los datos del clima y los asigna a la vista
  ubicacionSeleccionada(lugar: any) {
    this.weatherService.obtenerClima(lugar).subscribe((data) => {
      this.apiGeo = lugar;
      this.apiClima = data;
      this.dia1 = data.daily[0];
      this.dia2 = data.daily[1];
      this.dia3 = data.daily[2];
      this.dia4 = data.daily[3];
      this.resultadosBusqueda = [];
    });
  }

  //Funcion que obtiene los datos de geolocalizacion (longitud y latitud)
  //utiliza el servicio geolocalizacion.service
  async obtenerGeolocalizacion(): Promise<void> {
    try {
      const { coords } = await this.geolocalizacionservice.obtenerPosicionActual();

      //Se obtiene los datos del clima pasando como parametros los datos de geolocalizacion
      //obtenidos latitud y longitud y se asignan a la vista
      this.weatherService
        .obtenerClimaPorGeolocalizacion(coords)
        .subscribe((data) => {
          this.apiClima = data;
          this.dia1 = data.daily[0];
          this.dia2 = data.daily[1];
          this.dia3 = data.daily[2];
          this.dia4 = data.daily[3];
        });

      //Obtiene el Nombre de la ubicacion con la lat y lon y lo aplica a la vista
      this.weatherService.ubicacionPorCoordenadas(coords).subscribe((data) => {
        this.apiGeo = data[0]
      });
    } catch (error) {
      console.log(error);
    }
  }

  asignacionDeIconos(dato:any){
    console.log(dato)
    console.log(dato.current.weather[0].icon )
   
   switch(dato.current.weather[0].icon){
     case "01d":
     case "01n":
       this.iconoHoy = "../../../assets/icono-clima/sol.png"
       break
       case "02d":
         case"02n":
         this.iconoHoy = "../../../assets/icono-clima/parcialmente nublado.png"
         break
         case "03d":
           case "03n":
             this.iconoHoy = "../../../assets/icono-clima/nublado.png"
             break
             case "04d":
               case "04n":
                 this.iconoHoy = "../../../assets/icono-clima/nublado.png"
                 break
                 case"09d":
                 case"09n":
                 this.iconoHoy = "../../../assets/icono-clima/lluvioso.png"
                 break
                 case"10d":
                 case"10n":
                 this.iconoHoy = "../../../assets/icono-clima/lluvioso.png"
                 break
                 case"11d":
                 case"11n":
                 this.iconoHoy ="../../../assets/icono-clima/tormenta.png" 
                 break
                 case"13d":
                 case"13n":
                 this.iconoHoy ="../../../assets/icono-clima/lluvioso.png"
                 break
                 case"50d":
                 case"50n":
                 this.iconoHoy ="../../../assets/icono-clima/nublado.png"
                 break

   }
  }
}
