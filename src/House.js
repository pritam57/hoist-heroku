import React, { useState, useEffect } from "react";


const House = () => {

  const[paa,setpaa]=useState(0);
   const[plan,setplan]=useState([]);
   var[value,setvalue]=useState("")


  const [profile_picture,setprofile]=useState("");
  const [name,setname]=useState("");
  const[address,setaddress]=useState("");
  const[phone,setphone]=useState("");
  const[email,setemail]=useState("");
  const[gender,setgender]=useState("");
  const[hobbies,sethobbies]=useState([]);
  const[institute,setinstitute]=useState([]);
  const[degree,setdegree]=useState([]);
  const[percentage,setpercentage]=useState([]);
  const[pass_out_year,setpass]=useState([]);
  const [nam,setnam]=useState([]);
  const[experienc,setexperienc]=useState([]);
  const[company,setcompany]=useState([]);
  const[project,setproject]=useState([]);
  const[role,setrole]=useState([]);
  const[team_size,setteam]=useState([]);
  const[duration_from,setduration]=useState([]);
  const[duration_to,setdurationto]=useState([]);
  const[id,setid]=useState("");


  const[education,seteducation]=useState([]);
  const[skills ,setskills]=useState([]);
  const[experience,setexperience]=useState([]);



useEffect(()=>{
 
  Getlisttwo();
},[paa])



function Getlisttwo(){
  fetch("https://60d5a2c2943aa60017768b01.mockapi.io/candidate").then((result)=>{
    result.json().then((resp)=>{
      console.log(resp);
      setplan(resp);
      setprofile(resp[paa].profile_picture);
      setname(resp[paa].name);
      setaddress(resp[paa].address);
      setphone(resp[paa].phone);
      setemail(resp[paa].email);
      setgender(resp[paa].gender);
      sethobbies(resp[paa].hobbies);
      seteducation(resp[paa].education);
      setskills(resp[paa].skills);
      setexperience(resp[paa].experience);
      setid(resp[paa].id);
    }) })
}

function Updateuser(e){
 alert("update data succesfully");
  console.log({profile_picture, name,address,phone,email,gender,hobbies,education,skills,experience,id});
  let item={profile_picture, name,address,phone,email,gender,hobbies,education,skills,experience,id};

  fetch(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`,{
         method:'PUT',
         headers:{
             'Accept':'application/json',
             'content-Type':'application/json'
         },body:JSON.stringify(item)
        }).then((result)=>{
          result.json().then((resp) => {
            console.log(resp)
            Getlisttwo()
          })
        })
 }



function Dothisa(e){
  return( 
    setpaa(e.target.id),
    setvalue(e.target.id)
  )
} 

  return (
   
    <div className="main" >
  
<ol>
{plan.map((ga,ka)=>{return(<li id={ka} className="border" onClick={Dothisa}>{ga.name}</li>)})}

</ol>


<div className="simple">
    <label>profile_picture:</label><br/>
  <img style={{height:200,width:200}}  src={profile_picture} alt="loading"></img><br/><br/>
  <label>name:</label><br/>
  <input type={"text"} value={name} onChange={(e)=>{setname(e.target.value)}}/><br/><br/>
  <label>address:</label><br/>
  <input type={"text"} value={address} onChange={(e)=>{setaddress(e.target.value)}}/><br/><br/>
  <label>phone:</label><br/>
      <input type={"number"} value={phone} onChange={(e)=>{setphone(e.target.value)}}/><br/><br/>
      <label>email:</label><br/>
      <input type={"text"} value={email} onChange={(e)=>{setemail(e.target.value)}}/><br/><br/>
      <label>Gender:</label><br/>
      <select value={gender} onChange={(e)=>{setgender(e.target.value)}} >
      <option >----</option>
      <option value="Male">Male</option>
      <option value="female">Female</option> 
      </select><br/><br/>
      <label >Hobbies:</label><br/>
     <input type="checkbox"  value="Reading" id="Reading"  name={"Reading"} ></input><label>Reading</label><br/>
      <input type="checkbox"  value="Music" id="Music"  ></input><label>Music</label><br/>
      <input type="checkbox"  value="Coding" id="Coding"  ></input><label>Coding</label><br/><br/>

      {hobbies.map((k)=>{
        document.getElementById(k).checked=true;
      })}
      <label>education:</label><br/>
    {education.map((g,k)=>{
      return(<div>
      <label>institute</label><br/> <input type={"text"}></input><br/>
      <label>degree</label><br/>  <input  type={"text"}></input><br/>
      <label>percentage</label><br/> <input type={"text"}></input><br/>
      <label>pass_out_year</label><br/> <input type={"number"}></input><br/>

      </div>)
    })}
    <br/><br/>
    <label>skills:</label><br/>
    {skills.map((g,k)=>{
      return(<div>
      <label>name:</label><br/>  <input  type={"text"}></input><br/>
      <label>experience:</label><br/>  <input  type={"text"}></input><br/>
     
      </div>)
    })}<br/><br/>
    <label>experience:</label><br/>
    {experience.map((g,k)=>{
      return(<div>
      <label>company:</label><br/> <input type={"text"}></input><br/>
      <label>project:</label><br/>  <input  type={"text"}></input><br/>
      <label>role:</label><br/> <input type={"text"}></input><br/>
      <label>team_size</label><br/> <input type={"number"}></input><br/>
      <label>duration_from</label><br/> <input type={"text"}></input><br/>
      <label>duration_to</label><br/> <input type={"number"}></input><br/>

      </div>)
    })}<br/><br/>
    <label>id:</label><br/>
    <input type={"number"} value={id} onChange={(e)=>{setid(e.target.value)}}/><br/><br/>
   
    <button onClick={Updateuser} className="btn">Update</button>
      </div>
 </div>
 )}

export default House;