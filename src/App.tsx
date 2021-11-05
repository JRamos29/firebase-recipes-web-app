import { useState } from 'react';
import FirebaseAuthService from './firebase/authService';
import './App.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import firebase from './firebase/config';

function App() {
  const [user, setUse] = useState(null);

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipes</h1>
      </div>
    </div>
  );
}

export default App;
