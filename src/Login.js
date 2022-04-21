import React, { useState } from "react";
import "./Login.css";
import {Link} from 'react-router-dom';




function Login(){

const [id,setid]=useState("");
const [pass,setpass]=useState("");
const[data,setdata]=useState(1);


const Setinputid = (e) => {
    return(
        setid(e.target.value)
       )
}   

function Setpassword(e){
    return(
        setpass(e.target.value)
    )
}


const Dothisfunc =() => {

    if (id === "" || pass === "") {
        alert("id and pass must required");
      }
   else{
            setdata(2);
            alert(`id is ${id} and password is ${pass}`);
      
}
}

    return(
<div className="contain">
<div className="first">
<h1 className="head">Nonstop io tecnology <br/>pvt ltd</h1>
<div className="showdata">
{data===2 ? <h4>login id is :<i>{id}</i>  and password is : <i>{pass} </i> </h4>  : null}
</div>
</div>
<div className="second">
<input className="inputt" type={"text"} placeholder={"email address or phone no"} value={id} onChange={Setinputid}></input><br/><br/>
<input  className="inputt" type={"password"} placeholder={"password"} value={pass} onChange={Setpassword}></input><br/><br/>
<Link to="/candidate"><button className="small" onClick={Dothisfunc}>Log-in</button> </Link>

<a href="#">forgot password?</a><br/>
<button className="large">create new accounts</button>

</div>
</div>
    )
}

export default Login;