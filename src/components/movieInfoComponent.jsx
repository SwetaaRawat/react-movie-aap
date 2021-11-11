import React from 'react';
import MovieComponent from './MovieComponent';
import styled from "styled-components";
import { useState, useEffect, useParams } from 'react';
import {NavLink,BrowserRouter} from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Button, Modal, ModalBody, Model } from 'react-bootstrap';


const Image = styled.div`
display: flex; 
flex-direction: column;
padding: 10px;
width: 280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
`;

const Info = styled.div`
padding:30px;

`;

const MovieInfoComponent = ({match}) => {

  const [show, setshow] = useState([]);
  const[loading, setLoading] = useState(false);
  const [view, setView] = useState(false);
  let [name, setName] = useState([]);
  let [phonenumber, setPhoneNumber] = useState([]);
  let [time, setTime] = useState([]);
  let [date, setDate] = useState([]);

  useEffect(() => {
  async function getData(){
    setLoading(true);
    setView(true);
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=all`).then(data=>data.data);
  
  const temp = res.find( obj => {
    console.log(obj.show.id, match.params.id);
    console.log(obj.show.id.toString()===match.params.id.toString());
     return obj.show.id.toString()===match.params.id.toString()
    })

  console.log(temp);
  
  setshow(temp.show);
  setLoading(false);
  setView(false);

 }
  getData();

  },[]);

  const  handleModel = (e) => {
    setView(!view);
     }

  let handleName = (e) =>{
    name = e.target.value;
    setName(name);
    console.log(name)
  }

  const handlePhoneNumber = (e) =>{
    phonenumber = e.target.value;
    setPhoneNumber(phonenumber);
    console.log(phonenumber);
  }

  const handleTime = (e) =>{
    time = e.target.value;
    setTime(time);
    console.log(time);
  }

  const handleDate = (e) =>{
    
    date = e.target.value;
    setDate(date);
    console.log(date);
  }

  const handleSubmit = (e) =>{
   sessionStorage.setItem('Name', name);
   sessionStorage.setItem('PhoneNumber', phonenumber);
   sessionStorage.setItem('Time', time);
   sessionStorage.setItem('Date', date);
   console.log(name,phonenumber,time,date);
   console.log('Submitted');
  }

 



      if(loading === false)



      return (
        
    <div className="container-flex">
    <div className="row"> 
    <div class="col-md-3 " >
      <Image>
      <img
            src={show.image ? show.image.original : ""} alt="" height="520" weigth="389"
     />
     </Image>
    </div>

    <div class="col-md-9 " >
    <Info>
    <div style={{color:"black"}, {fontWeight:"800"}, {fontSize: "450%"}}>
    {show.name}</div>
    <div>
      Language: {show.language}<br/> Type: {show.genres}<br/> 
      Released: {show.premiered} <br/>Runtime: {show.runtime}min
    </div>
    <br/>

    <div>
      {show.summary}
    </div>

    <br/><br/>
            
            <div>
            <button type="button" class="btn btn-danger" 
            onClick={(e)=>{handleModel(e)}}>Book Movie Ticket</button>
            <Modal show= {view} onHide={(e)=>{handleModel(e)}}>
            <Modal.Header closeButton><h2>Book Movie Ticket For <br/><div style={{color:"red"}}>{show.name}</div></h2>
                            
            </Modal.Header>

            <Modal.Body>
             <form 
            
             >
             <div className="form-group">
              
                      <label htmlFor="name">Name</label>
                      <input 
                      id="name" type="text" className="form-control"
                      placeholder="Your Name"
                      onChange={handleName}
                      value={name}
                      id="name"
                      /></div><br/>

                       <div className="form-group">
                          <label htmlFor="number">Phone Number</label>
                          <input type="number" className="form-control"
                          placeholder="Your Phone Number"
                          onChange={handlePhoneNumber} 
                          value={phonenumber}
                          id="phonenumber"
                          />
                      </div><br/>

                      <div className="form-group">
                          <label htmlFor="time">Show Time</label>
                          <input type="" className="form-control"  
                          placeholder="Set Your Timing"
                          onChange={handleTime}
                          value={time}
                          id="time"
                          />
                      </div><br/>

                      <div className="form-group">
                          <label htmlFor="date">Date</label>
                          <input type="" className="form-control"
                          placeholder="Set Your Date"
                          onChange={handleDate}
                          value={date}
                          id="date"
                
                          />
                      </div>
             </form>
              </Modal.Body>
            <Modal.Footer> 
            <button type="button" class="btn btn-danger"
           onClick= 
            {(e)=> {handleSubmit(e)}}
            >Book Ticket
            </button>
            </Modal.Footer>
            </Modal>
            </div>
             
             <br/>
           
            
            <NavLink to="/movieComponent">
            <button 
            type="button" class="btn btn-dark"  >Back To Previous Page
            </button> </NavLink>
    </Info>
    </div>
  
 
           </div>
           </div>
           
)
return <Loader
type="Puff"
color="#00BFFF"
height={100}
width={100}

/> 
}

export default MovieInfoComponent;
