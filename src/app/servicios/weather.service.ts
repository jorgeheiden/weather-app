import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  obtenerClima(url:any): Observable<any>{
    return this.http.get<any>(url)
  }

  
  obtenerUbicacion(dato:any):Observable<any>{
    return this.http.get<any>(dato)
   
    
  }

}
