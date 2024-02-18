import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
const Nav=()=>{
 
    const auth = localStorage.getItem("users")
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            {
            auth?<ul className='nav-ul'>
                <li><Link to='/'>PRODUCTS</Link></li>
                <li><Link to='/myproduct/'>MY PRODUCTS</Link></li>
                <li><Link to='/add'>ADD PRODUCTS</Link></li>
                <li><Link to='/profile'>PROFILE</Link></li>
                <li><Link onClick={logout} to="/signup">LOGOUT({JSON.parse(auth).username})</Link></li>
            </ul>:
            <ul className='nav-ul nav-align'>
                    <li><Link to='/Signup'>SIGN UP</Link></li>
                    <li><Link to='/Login'>LOGIN</Link></li>
            </ul>
}
        </div>
    )
}

export default Nav;