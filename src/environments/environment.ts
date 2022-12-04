// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import Environment from './environment.interface';

export const environment: Environment = {
  firebase: {
    projectId: 'xiva-a0398',
    appId: '1:242276255892:web:abeb8a66c233d3f3018c81',
    storageBucket: 'xiva-a0398.appspot.com',
    locationId: 'asia-northeast1',
    apiKey: 'AIzaSyD_vOVJ8NOIhacgRzuCBjczoOkdlSD5uic',
    authDomain: 'xiva-a0398.firebaseapp.com',
    messagingSenderId: '242276255892',
    measurementId: 'G-1Z7GTG7EG6',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
