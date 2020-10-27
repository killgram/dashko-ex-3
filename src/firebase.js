var firebase = require('firebase')

firebase.initializeApp({
  apiKey: 'AIzaSyA4YJIjhSpQV7a7-SssThNnAYc5lG6dUTM',
  authDomain: 'react-todo-d18dd.firebaseapp.com',
  databaseURL: 'https://react-todo-d18dd.firebaseio.com',
  projectId: 'react-todo-d18dd',
  storageBucket: 'react-todo-d18dd.appspot.com',
  messagingSenderId: '1049231229852',
  appId: '1:1049231229852:web:a90d3f66ca53815d887e59',
})

var db = firebase.firestore()

export { db }
