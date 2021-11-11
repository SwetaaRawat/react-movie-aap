import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useHistory} from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {NavLink,BrowserRouter} from "react-router-dom";
import MovieInfoComponent from "./movieInfoComponent";


const MovieContainer = styled.div`
display: flex; 
flex-direction: column;
padding: 10px;
width: 280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;

`;



// const MovieInfo = styled.div`
// box-shodow:0 3px 10px 0 #aaa;

// font-color:white
// padding: 10px;

// `;



const MovieComponent = () => {

    const [show, setshow] = useState([]);
    
    useEffect(() => {
    async function getData(){
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=all`).then(data=>data.data);
    setshow(res);
   }
    getData();
    });

 console.log(show);

// useHistory(() =>{
//   function handleView (shows){
//   console.log(shows.id);
// }; })

// function handleView() {
//   history.push("/");
// }
 
return (
    <div className="container">
    <div className="row">    {
    
       show.map(shows=>{
        return(
    <div class="col-md-3 no-margin no-padding" >
      <MovieContainer>
            <div key= {shows.show.id}>
            <img src={shows.show.image.original} alt="" height="380" weigth="389"/>
            <div style={{color:"black"}, {fontFamily: "serif" }, {fontWeight:"600"}}>{shows.show.name}
            </div>
            
            <NavLink to= {`movieInfoComponent/${shows.show.id}`}>
            <button 
            type="button" class="btn btn-secondary btn-sm" >View Details
            </button> </NavLink>
          </div>
           </MovieContainer>

    
  
   </div> 
  )}
        
        
)} </div>
</div>
) 
       


     };


        
  
export default MovieComponent;