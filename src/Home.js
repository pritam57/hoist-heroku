import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom';


const Home = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState([]);
const[pa,setpa]=useState(0);
const[count,setcount]=useState("hide");

const[number,setnumber]=useState("");


useEffect(()=>{
  Getlist();
},[])

function Getlist(){
  fetch("https://60d5a2c2943aa60017768b01.mockapi.io/candidate").then((result)=>{
    result.json().then((resp)=>{
      console.log(resp);
      setPlanets(resp);
      setnumber(resp[pa].id);
    })
  })
}

  function Dothis(e){
    return(
    
    
      setpa(e.target.id),
      setcount("show"),
     console.log(pa)
    
    )
  } 

 function Deleteuser(){
   return(
     alert(` delete user id no ${(pa)+1} succesfully`),
     fetch(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${number}`,{
       method:"DELETE"
   }).then((result)=>{
     result.json().then((resp)=>{
       console.log(resp);
       Getlist();
     })})
   )}

  return (
   
    <div className="main" >
  
    <ol>
    {planets.map((g,k)=>{return(<li id={k} className="border" onClick={Dothis}>{g.name}</li>)})}
    
    </ol>
   
   

   <NavLink to="/candidate/new"><button className="addbutton">Add</button> </NavLink>
  
    <div className={count}>
  
    {planets.map((g,k)=>{if(k==pa){ 
     
      return(
       
      
      <div className="inf">
    
      <label>profile_picture:</label><br/>
      <img style={{height:200,width:200}}  src={g.profile_picture} alt="loading"></img><br/><br/>
     <label>name:</label><br/>
     <input type={"text"}  value={g.name}/><br/><br/>
      <label>phone:</label><br/>
      <input type={"text"} value={g.phone}/><br/><br/>
      <label>email:</label><br/>
      <input type={"text"} value={g.email}/><br/><br/>
      <label>Gender:</label><br/>
      <select value={g.gender} >
      <option >----</option>
      <option value="Male">Male</option>
      <option value="female">Female</option> 
      </select><br/><br/>
    
     <label >Hobbies:</label><br/>
      
       <ul>
       {(g.hobbies).map((k)=>{return(<div><input type={"text"} value={k}></input><br/></div>)})}
       </ul>

       <br/><br/>
       <label >Education:</label><br/><br/>
      
       <ul>


       {(g.education).map((k)=>{return(
         <div>
         <label>institute:</label><br/><input  type={"text"}  value={k.institute}></input><br/>
         <label>degree:</label><br/><input type={"text"} value={k.degree}></input><br/>
         <label>percentage:</label><br/><input  type={"text"}  value={k.percentage}></input><br/>
         <label>pass_out_year:</label><br/><input type={"text"} value={k.pass_out_year}></input><br/>
        
       </div>
       )})}<br/><br/>
       </ul>
       <label >Skills:</label><br/><br/>
      

       <ul>
       {(g.skills).map((k)=>{return(
         <div><label>name:</label><br/><input type={"text"}  value={k.name}></input><br/>
         <label>experience:</label><br/> <input type={"text"} value={k.experience}></input>
        
       </div>)})}<br/><br/>
       </ul>

       <label >Experience:</label><br/><br/>
       <ul>
      


       {(g.experience).map((k)=>{return(
        <div>
        <label>company:</label><br/><input type={"text"} value={k.company}></input><br/>
        <label>project:</label><br/> <input type={"text"} value={k.project}></input><br/>
        <label>role:</label><br/> <input type={"text"} value={k.role}></input><br/>
        <label>team_size:</label><br/> <input type={"text"} value={k.team_size}></input><br/>
        <label>duration_from:</label><br/> <input type={"text"} value={k.duration_from}></input><br/>
        <label>duration_to:</label><br/>  <input type={"text"} value={k.duration_to}></input><br/>
       
      </div>)})}
     
       </ul>
       <label>Id:</label><br/><input id="value" type={"number"} value={g.id}></input><br/><br/>
    
      <NavLink  to={"/candidate/House"}><button  className="btn">Edit</button></NavLink><br/>
    
       <button onClick={Deleteuser} className="btn">Delete</button>
      
      </div>
      
     
      )}}
      )}
     
    </div>

    </div>

  ) 
};
export default Home;
