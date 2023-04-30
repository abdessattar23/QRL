const firebase = require('firebase');

exports.handler = async (event, context, callback) => {
  const userID = event.queryStringParameters.id;
  firebase.initializeApp({
    apiKey: "AIzaSyBNy7UoUGLVJWcIs2zbogWzO6qItr3sFBo",
    authDomain: "hipsters-beta.firebaseapp.com",
    databaseURL: "https://hipsters-beta-default-rtdb.firebaseio.com",
    projectId: "hipsters-beta",
    storageBucket: "hipsters-beta.appspot.com",
    messagingSenderId: "802281437693",
    appId: "1:802281437693:web:9d105e846ff29d32ca8194",
    measurementId: "G-LSP1J7RQDT"
  });

  const snapshot = await firebase.database().ref('users').once('value');
  const users = snapshot.val();

  const ids = [];

  if (users) {
    Object.keys(users).forEach((key) => {
      const user = users[key];

      if (user.id) {
        ids.push(user.id);
        if(ids.includes(userID){
           callback(null, {
    statusCode: 200,
    body: JSON.stringify({ exists: true }),
  });
           }else{
              callback(null, {
    statusCode: 404,
    body: JSON.stringify({ ids }),
  });                 
}
      }
    });
  }
};
