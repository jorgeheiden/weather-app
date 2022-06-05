// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  geoApi:{
    url: 'https://api.openweathermap.org/geo/1.0/direct?q=',
    key: '&appid=bd9c22a52cd4798f4a301517813a7d2a'
  },
  climaApi:{
    url: 'https://api.openweathermap.org/data/2.5/onecall?lat=',
    key: '&appid=bd9c22a52cd4798f4a301517813a7d2a'
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
