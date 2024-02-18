import React from 'react';

const Profile = ()=>{
    let auth = localStorage.getItem("users");
    auth = JSON.parse(auth);

    return(
<div className='data'>
    UserName :   {`${auth.username}`}
    <br/>
    <br/>
    EMAIL :   {`${auth.email}`}
    <br/>
    <br/>
    ID :   {`${auth._id}`}
</div>
    );
};

export default Profile;