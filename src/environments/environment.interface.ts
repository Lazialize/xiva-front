interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  locationId: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export default interface Environment {
  production: boolean;
  firebase: FirebaseConfig
}