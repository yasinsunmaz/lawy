// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //TODO Firebase
  firebase:{
    apiKey: "AIzaSyDcNT-W6HDVf-n95Yp2X3AyQsX5NyEOqdA",
    authDomain: "ys-users.firebaseapp.com",
    projectId: "ys-users",
    storageBucket: "ys-users.appspot.com",
    messagingSenderId: "1074020444959",
    appId: "1:1074020444959:web:c3281068fc85aa7b8cde2a"
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
