import React, { Component } from 'react';
import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/movieInfoComponent";
import Header from './components/Header';
import axios from "axios";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';


class App extends Component {
   render(){
   return (
     <React.Fragment>
        
        <Header/> 
         <main className = "container">
        <Switch>
       
      
      <Route path = "/movieInfoComponent/:id" component={MovieInfoComponent}/>
      <Route path = "/" component={MovieComponent}/>
    
     </Switch>
     </main>
     </React.Fragment>
   );
 }
 }
 export default App;
 




