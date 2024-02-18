import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"

const Signup = () => {
    const [username,setUsername] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>
    {
        const auth = localStorage.getItem("users");
        if(auth)
        {
            navigate('/')
        }
    })
    const collectData = async ()=>{
        console.log(username,email,password);
        let result = await fetch("http://localhost:5000/Register",{
            method:"Post",
            body:JSON.stringify({username,email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        console.log(result);
        localStorage.setItem("users",JSON.stringify(result));
        // localStorage.setItem("myCat", "Tom");

            navigate('/')
    }
    
    return(
        <div className="signup">
            <h1>RESGISTER</h1>
            <input className="inputbox" type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
            
            <input className="inputbox" type="email" placeholder="xyz@gmail.com" value={email} onChange={(e)=>setemail(e.target.value)}></input>
            
            <input className="inputbox" type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}></input>

            <button className="signupbutton" onClick={collectData}>SIGNUP</button>
        </div>
    )
}

export default Signup;