import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };

  const firebase = app.initializeApp(config)
  const auth = firebase.auth()
  const googleProvider = new app.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const storageRef = storage.ref()

  const doAddFile = file => {
    return storageRef
      .child(file.name)
      .put(file)
  }

  const doSignInWithGoogle = () =>
    auth.signInWithPopup(googleProvider)

  const doSignOut = ()  => auth.signOut()

    export {
        firebase,
        doSignInWithGoogle,
        auth,
        doAddFile,
        doSignOut
    }
