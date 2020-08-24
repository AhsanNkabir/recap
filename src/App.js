import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
    
        <LoadData></LoadData>
      
      <MovieCounter></MovieCounter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
} 

function LoadData(){
  const[ncc, setNcc] = useState([]);
  useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => console.log(data))
    
      }, [])
   
    return (
      <div>
        <p>email:{}</p>
      </div>
      )
  }


 function MovieCounter(props){
   const [count, setCount] = useState(0);
  //  const handleCounter = () => setCount(count + 1);

   return(
     <div>
       <button onClick={() => setCount(count + 1)}>Add Movie</button>
       <h3>Number of Movies:{count}</h3>
       <MovieDisplay number={count}></MovieDisplay>
     </div>
   )
 }
 function MovieDisplay(pros){

  return <h2>I have watched: {pros.number}</h2>
 } 

function Nayok(props){
  // const nayokStyle = {
  //   border:'2px solid yellow',
  //   margin: '20px'
  // }
  const {names, email} = props.name
  return(
    <div style={{border:'2px solid yellow', margin: '20px'}}>
      <h1>Ami Nayok -{names}</h1>
      <p>Age: {props.year || 30}</p> 
      <p>email: {email}</p>
      {/* default value */}
    </div>
  )
} 


export default App;
