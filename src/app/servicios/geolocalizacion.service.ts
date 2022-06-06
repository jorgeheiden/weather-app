import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeolocalizacionService {
  constructor() {}

  public obtenerPosicionActual(): Promise<any> {
    //opciones de configuracion de la geolocalizacion (const opciones ={})
    const opciones ={
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge:0
    };
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, opciones);
    });
  }
}
