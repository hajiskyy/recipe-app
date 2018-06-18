// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB30cujbHt9rbrrgd8X8GK1VCD5PnM-2Pk",
    authDomain: "recepie-app.firebaseapp.com",
    databaseURL: "https://recepie-app.firebaseio.com",
    projectId: "recepie-app",
    storageBucket: "recepie-app.appspot.com",
    messagingSenderId: "770766576838"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
