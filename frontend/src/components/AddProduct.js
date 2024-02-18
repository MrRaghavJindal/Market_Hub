import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const AddProduct = ()=>{
    const [name,setname] = useState("");
    const [price,setprice] = useState("");
    const [category,setcategory] = useState("");
    const [company,setcompany] = useState("");
    const [error,seterror] = useState(false);
    const navigate = useNavigate();
    const addProduct = async ()=>{
        console.log(name,price,category,company);
        
        if(!name || !price || !category || !company)
        {
        seterror(true);
        return false;
        }

        const auth = localStorage.getItem("users");
        let userId = JSON.parse(auth)._id;
        console.log(userId);
        let result = await fetch("http://localhost:5000/add-product",
        {
            method:"Post",
            body: JSON.stringify({name,price,userId,category,company}),
            headers:{
                "Content-type":"application/json"
            }
        })
        result = await result.json();
        if(result)
        {
            navigate('/')
        }
        console.log(result);
    }
    return (
        <div className="signup">
            <h1>Add Product</h1>
            <input className="inputbox" type="text" placeholder='Product Name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
            {error && !name &&<span className='input-validation'>Enter Valid Name</span>}
            <input className="inputbox" type="Number" placeholder='Price' value={price} onChange={(e)=>{setprice(e.target.value)}}></input>
            {error && !price &&<span className='input-validation'>Enter Valid Price</span>}
            <input className="inputbox" type="text" placeholder='Category' value={category} onChange={(e)=>{setcategory(e.target.value)}}></input>
            {error && !category &&<span className='input-validation'>Enter Valid Category</span>}
            <input className="inputbox" type="text" placeholder='Company Name' value={company} onChange={(e)=>{setcompany(e.target.value)}} ></input>
            {error && !company &&<span className='input-validation'>Enter Valid Company</span>}
            <button className='signupbutton' onClick={addProduct}>ADD PRODUCT</button>
        </div>
    )
}

export default AddProduct;