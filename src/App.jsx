import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tab from './component/userprofile/tab';
import Edit from './component/userprofile/edit';

function App() {

    return (
      <>
        <Tab/>
        <Edit/>
      </>
    )
  }
  
  export default App


// import React, { Component } from "react";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link,
// } from "react-router-dom";

// class App extends Component {
//   render() {
//       return (
//           <Router>
//               <div className="App">  
              
//                   <Routes>
//                       <Route
//                           path="/"
//                           element={<Tab />}
//                       ></Route>
//                       <Route
//                           path="/"
//                           element={<Edit />}
//                       ></Route> 
                
//                   </Routes>
//               </div>
//           </Router>
//       );
//   }
// }

// export default App;
