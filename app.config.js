const { parsed } = require('dotenv').config();

module.exports = {
  "expo": {
    "name": "social-app",
    "slug": "social-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      firebaseApiKey: parsed.FIREBASE_API_KEY,
      firebaseAuthDomain: parsed.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: parsed.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: parsed.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: parsed.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: parsed.FIREBASE_APP_ID,
      firebaseMeasurementId: parsed.FIREBASE_MEASUREMENT_ID
    },
  },
}
