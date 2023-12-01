import './App.css';
import React from 'react';
import { useSelector} from 'react-redux'  
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {LandingPage, Home, CreateVideogame, Detail}from './components'



function App() {
  const token = useSelector((state) => state.usersReducers.token);
  if(token){
  return (
    <BrowserRouter>
          <React.Fragment>
            <Routes>              
            <Route exact path="/" component={LandingPage}/>
            <Route path="/home" component={Home}/>
            <Route path="/create" component={CreateVideogame}/>
            <Route exact path="/videogames/:id" component={Detail}/>
            </Routes>
          </React.Fragment>           
     </BrowserRouter>
  )
}else{
    return (
      <BrowserRouter>
          <React.Fragment>
            <Routes>              
            <Route exact path="/" component={LandingPage}/>
            <Route path="/home" component={Home}/>
            <Route path="/create" component={CreateVideogame}/>
            <Route exact path="/videogames/:id" component={Detail}/>
            </Routes>
          </React.Fragment>           
     </BrowserRouter>
    )
  
}
}

export default App;
