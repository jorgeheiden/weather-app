import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  //Se a signa a apiUrl la url de la API alojada en el enviroment
  private readonly apiUrl = environment.geoApi.url;

  constructor(private http: HttpClient) {}

  obtenerClima(lugar: any): Observable<any> {
    return this.http.get<any>(
      `${environment.climaApi.url}${lugar.lat}&lon=${lugar.lon}${environment.climaApi.key}&units=metric`
    );
  }
  obtenerClimaPredeterminado(url: any): Observable<any> {
    return this.http.get<any>(url);
  }
  obtenerClimaPorGeolocalizacion(coords: any): Observable<any> {
    return this.http.get<any>(
      `${environment.climaApi.url}${coords.latitude}&lon=${coords.longitude}${environment.climaApi.key}&units=metric`
    );
  }
  Ubicacion(dato: any): Observable<any> {
    //Se concatenan las distintas partes de la url de la API
    return this.http.get<any>(
      `${environment.geoApi.url}${dato}${'&limit=5'}${environment.geoApi.key}`
    );
  }
  ubicacionPorCoordenadas(coords: any): Observable<any> {
    return this.http.get<any>(
      `${environment.geoApiReverse.url}${coords.latitude}&lon=${coords.longitude}&limit=5${environment.geoApiReverse.key}`
    );
  }
}
