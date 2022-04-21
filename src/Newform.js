import React, { useEffect, useState } from "react";



function Newform(){


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

    const [userinfo, setUserInfo] = useState({
        languages: [],
        response: [],
      });

      const handleChange = (e) => {
      
        const { value, checked } = e.target;
        const { languages } = userinfo;
           if (checked) {
          setUserInfo({
            languages: [...languages, value],
            response: [...languages, value],
          });
          hobbies.push(value);
        }
        else {
          setUserInfo({
            languages: languages.filter((e) => e !== value),
            response: languages.filter((e) => e !== value),
          });
          hobbies.filter((e) => e !== value);
        }
      };

    function Dothis(e){
      if(name.length!=0){
      alert("form submitted successfully");
     e.preventDefault();
     console.log({profile_picture, name,address,phone,email,gender,hobbies,education,skills,experience,id});
     let pritam={profile_picture, name,address,phone,email,gender,hobbies,education,skills,experience,id};
     fetch("https://60d5a2c2943aa60017768b01.mockapi.io/candidate",{
         method:'POST',
         headers:{
             'Accept':'application.json',
             'content-Type':'application/json'
         },
         body:
             JSON.stringify(pritam)
         }).then((result)=>{
             console.log("result:", result)
         })
    }
    else{
      alert("please fill form")
    }
   
  }
    function Dosomefunc(e){
      
        e.preventDefault();
        alert("education saved add more education");
var p=({institute,degree,percentage,pass_out_year});
if(education.length<10){
education.push(p);}
if(education.length===10){
    alert("enough")
}

setinstitute("");
setdegree("");
setpercentage("");
setpass("");

}


function Addskills(e){
    e.preventDefault();
    alert("skill saved add more skill");
    var r=({nam,experience});
    if(skills.length<10){
    skills.push(r);}
    if(skills.length===10){
        alert("enough")
    }    
   
    setnam("");
    setexperienc("");
}   
      

function Addexperience(e){
    e.preventDefault();
    alert("experience saved add more experience");
    var r=({company,project,role,team_size,duration_from,duration_to});
    if(skills.length<10){
    experience.push(r);}
    if(skills.length===10){
        alert("enough")
    }    
setcompany("");
setproject("");
setrole("");
setteam("");
setduration("");
setdurationto("");

}
     

    return(
        <div className="full">
      
        <div className="half">
       <h1 className="headingn"> Student form</h1>
       <label for="name" name="name">name:</label><br/>
       <input onChange={(e)=>{setname(e.target.value)}} id="name" type={ "text"} value={name}></input><br/>

       <label for="address" name="address">address:</label><br/>
       <input onChange={(e)=>{setaddress(e.target.value)}} id="address" value={address} type={ "text"} ></input><br/>

       <label for="phone" name="phone" >phone:</label><br/>
       <input  value={phone}onChange={(e)=>{setphone(e.target.value)}} id="phone" type={ "number"}></input><br/>

       <label for="email" >email:</label><br/>
       <input value={email} onChange={(e)=>{setemail(e.target.value)}} id="email"type={ "email"}></input><br/>
     
      <label>Gender:</label><br/>
      <select value={gender} onChange={(e)=>{setgender(e.target.value)}} >
      <option >----</option>
      <option value="Male">Male</option>
      <option value="female">Female</option> 
      </select><br/><br/>

      <label>hobbies:</label><br/>
      <input type="checkbox" onChange={handleChange} value="Reading" id="Reading"  name={"Reading"} ></input><label>Reading</label><br/>
      <input type="checkbox" onChange={handleChange} value="Music" id="Music"  ></input><label>Music</label><br/>
      <input type="checkbox" onChange={handleChange} value="Coding" id="Coding"  ></input><label>Coding</label><br/><br/>

      {(education).map((k)=>{return(
        <div>
        <label>institute:</label><br/><input  type={"text"}  value={k.institute}></input><br/>
        <label>degree:</label><br/><input type={"text"} value={k.degree}></input><br/>
        <label>percentage:</label><br/><input  type={"text"}  value={k.percentage}></input><br/>
        <label>pass_out_year:</label><br/><input type={"text"} value={k.pass_out_year}></input><br/>
       
      </div>
      )})}<br/><br/>
      



      <label>Education:</label><br/>
      
      <label for="institute" >institute:</label><br/>
      <input onChange={(e)=>{setinstitute(e.target.value)}} type={"text"} value={institute} name="institute"></input><br/>
      <label for="degree" >degree:</label><br/>
      <input onChange={(e)=>{setdegree(e.target.value)}} type={ "text"} value={degree} name="degree"></input><br/>
      <label for="percentage" >percentage:</label><br/>
      <input onChange={(e)=>{setpercentage(e.target.value)}} type={ "text"} value={percentage} name="percentage"></input><br/>
      <label for="pass_out_year" >pass_out_year:</label><br/>
      <input onChange={(e)=>{setpass(e.target.value)}} type={ "text"} value={pass_out_year} name="pass_out_year"></input><br/>
      <button onClick={Dosomefunc}>Add</button><br/><br/>

      </div>
      <div className="halff">
      {(skills).map((k)=>{return(
        <div><label>name:</label><br/><input type={"text"}  value={k.name}></input><br/>
        <label>experience:</label><br/> <input type={"text"} value={k.experience}></input>
       
      </div>)})}<br/><br/>
     

      <label>Skills:</label><br/>
      
      <label >name:</label><br/>
      <input onChange={(e)=>{setnam(e.target.value)}} type={"text"} value={nam} name="name"></input><br/>
      <label  >experience:</label><br/>
      <input onChange={(e)=>{setexperienc(e.target.value)}} type={ "text"} value={experienc} name="experience" ></input><br/>
     
      <button onClick={Addskills}>Add</button><br/><br/>


      {(experience).map((k)=>{return(
        <div>
        <label>company:</label><br/><input type={"text"} value={k.company}></input><br/>
        <label>project:</label><br/> <input type={"text"} value={k.project}></input><br/>
        <label>role:</label><br/> <input type={"text"} value={k.role}></input><br/>
        <label>team_size:</label><br/> <input type={"text"} value={k.team_size}></input><br/>
        <label>duration_from:</label><br/> <input type={"text"} value={k.duration_from}></input><br/>
        <label>duration_to:</label><br/>  <input type={"text"} value={k.duration_to}></input><br/>
       
      </div>)})}


      <label>Experience:</label><br/>
      
      <label >company:</label><br/>
      <input onChange={(e)=>{setcompany(e.target.value)}} type={"text"} value={company} name="company"></input><br/>
      <label >project:</label><br/>
      <input onChange={(e)=>{setproject(e.target.value)}} type={ "text"} value={project} name="project"></input><br/>
      <label  >role:</label><br/>
      <input onChange={(e)=>{setrole(e.target.value)}} type={ "text"} value={role} name="role"></input><br/>
       <label  >team_size:</label><br/>
      <input onChange={(e)=>{setteam(e.target.value)}} type={ "text"} value={team_size} name="team_size"></input><br/>
      <label >duration_from:</label><br/>
      <input onChange={(e)=>{setduration(e.target.value)}} type={ "text"} value={duration_from} name="duration_from"></input><br/>
      <label  >duration_to:</label><br/>
      <input onChange={(e)=>{setdurationto(e.target.value)}} type={ "text"} value={duration_to} name="duration_to"></input><br/>
      <button onClick={Addexperience}>Add</button><br/><br/>
<label>id:</label><br/>
      <input type="text" value={id} onChange={(f)=>{setid(f.target.value)}}></input>

      <button onClick={Dothis} className="addbutton" style={{position:"absolute", color:"red",left:320,marginTop:50}}>Submit</button>
      </div>
     
    
      
        </div>
    )
}

export default Newform;
