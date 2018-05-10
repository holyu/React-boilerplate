# Simple Webpack React Boilerplate

# React/Sass/Firebase

Prod:

* **Webpack** 4.8.1
* **React** 16.3.2 + **Redux** 4.0.0
* **Normalize** 8.0.0 + **Sass**
* **Firebase** 5.0.1

Dev & test

* **Jest** 22.4.3 + **Enzyme** 3.3.0
* **Eslint** 4.19.1 (**airbnb-config** 16.1.0)

1.  `npm install`

2.  Create two Firebase projects (one for app, one for testing) & create files for firebase config: `.env.development` `.env.test` in root directory.

3.  Create App!
    `npm run dev` // webpack-dev-server
    `npm run build` // build files
    `npm run build:sm` // build files with source-map
    `npm run test` // Jest/Enzyme testing

4.  Deploy on heroku - create ENV vars for Firebase:

```
heroku config:set FIREBASE_API_KEY=Xyz123etc FIREBASE_AUTH_DOMAIN=some.firebaseapp.com FIREBASE_DATABASE_URL=https://some.firebaseio.com FIREBASE_PROJECT_ID=some FIREBASE_STOREGE_BUCKET=some.appspot.com FIREBASE_MESSAGING_SENDER_ID=123456789
```

5.  Push your app.
