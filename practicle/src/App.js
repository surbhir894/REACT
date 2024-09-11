import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



import React from 'react';
// import { GSTProvider } from './components/GSTContext';
// import InputComponent from './components/InputComponent';
// import DisplayComponent from './components/DisplayComponent';

import GitHubApi from './components/GitHubApi';



// import Register from './components/Register';
//  import Autocard from './components/Autocard';
//  import HobbySelector from './components/HobbySelector';
// import HobbyRadioSelector from './components/HobbyRadioSelector';
// import StudentBoard from './components/StudentBoard';
// import CounterApp from './components/CounterApp';
// import UserName from './components/UserName';



function App() {
  return (
    <>
      {/* <Autocard/> */}
      {/* <HobbySelector/>   */}
      {/* <HobbyRadioSelector/> */}
      {/* <StudentBoard/> */}
      {/* <Register /> */}
      {/* <CounterApp/> */}
      {/* <UserName /> */}

      {/* <GSTProvider>
      <InputComponent />
      <DisplayComponent />
       </GSTProvider> */}

       <GitHubApi /> 

    </>

  );
}

export default App;
