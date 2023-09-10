import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tiffinservice.firstApp',
  appName: 'First App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
