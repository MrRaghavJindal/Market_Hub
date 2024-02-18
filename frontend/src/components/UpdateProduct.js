import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'

const UpdateProduct = ()=>{
    const [name,setname] = useState("");
    const [price,setprice] = useState("");
    const [category,setcategory] = useState("");
    const [company,setcompany] = useState("");
    const [error,seterror] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getproducts();
    },[])

    const getproducts = async ()=>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setname(result.name)
        setprice(result.price)
        setcategory(result.category)
        setcompany(result.company)
    }

    const update = async ()=>{
        let result = await fetch(`http://localhost:5000/update/${params.id}`,
        {
            method:"Put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-type':'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        navigate('/')
    }
    return (
        <div className="signup">
            <h1>Update Product</h1>
            <input className="inputbox" type="text" placeholder='Product Name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
            {error && !name &&<span className='input-validation'>Enter Valid Name</span>}
            <input className="inputbox" type="Number" placeholder='Price' value={price} onChange={(e)=>{setprice(e.target.value)}}></input>
            {error && !price &&<span className='input-validation'>Enter Valid Price</span>}
            <input className="inputbox" type="text" placeholder='Category' value={category} onChange={(e)=>{setcategory(e.target.value)}}></input>
            {error && !category &&<span className='input-validation'>Enter Valid Category</span>}
            <input className="inputbox" type="text" placeholder='Company Name' value={company} onChange={(e)=>{setcompany(e.target.value)}} ></input>
            {error && !company &&<span className='input-validation'>Enter Valid Company</span>}
            <button className='signupbutton' onClick={update}>UPDATE PRODUCT</button>
        </div>
    )
}

export default UpdateProduct;