import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //Se a signa a apiUrl la url de la API alojada en el enviroment
  private readonly apiUrl = environment.geoApi.url

  constructor(private http: HttpClient) { }

  obtenerClima(url:any): Observable<any>{
    return this.http.get<any>(url)
  }

  
  Ubicacion(dato:any):Observable<any>{
    //Se concatenan las distintas partes de la url de la API
    return this.http.get<any>(`${this.apiUrl}direct?q=${dato},buenos%20aires,ar&limit=5${environment.geoApi.key}`)
   
    
  }

}
