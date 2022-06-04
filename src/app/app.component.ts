import { Component } from '@angular/core';
import { WeatherService } from './servicios/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  ubicaciones:any
  constructor(private weatherService: WeatherService) { }

  onSearch(evento:string){
    this.weatherService.Ubicacion(evento).subscribe((data)=>{
      this.ubicaciones = data
      console.log(data)
    })
    
  }
}
