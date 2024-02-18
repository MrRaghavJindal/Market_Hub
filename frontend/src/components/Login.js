import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("users");
        if(auth)
        {
            navigate('/');
        }
    })
    const handlelogin = async ()=>{
        console.log(email,password);
        let result = await fetch("http://localhost:5000/login",{
            method:"Post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-type':"application/json"
            }
        })
        result = await result.json();
        console.log(result);
        if(result.username)
        {
            localStorage.setItem("users",JSON.stringify(result));
            navigate('/');
        }
        else
        {
            alert("PLEASE ENTER CORRECT DETAILS");
        }
    }
    return(
        <div className="signup">
            <h1>LOGIN</h1>
            <input className="inputbox" type='text' placeholder='Enter Your Email' onChange={(e)=>{setemail(e.target.value)}} value={email}></input>
            <input className="inputbox" type='password' placeholder='Enter Your Password' onChange={(e)=>{setpassword(e.target.value)}} value={password}></input>
            <button className="signupbutton" onClick={handlelogin}>Login</button>
        </div>
    )
}

export default Login;