import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';

const Myproduct = ()=>{
    const [products,setproduct] = useState([])

    useEffect(()=>{
        getproduct()
    },[])
    
    const getproduct = async()=>{

    const auth = localStorage.getItem("users");
    let userId = JSON.parse(auth)._id;

    let data = await fetch(`http://localhost:5000/myproducts/${userId}`);
    data = await data.json();
    setproduct(data)
    }

    const deleteRecord = async(id)=>{
        let data = await fetch(`http://localhost:5000/delete/${id}`,{
            method:"Delete"
        });
        data = await data.json();
        if(data)
        {
            getproduct();
        }
    } 
    return(
        <div className='products'>
            <ul>
                <li>S No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Update</li>
                <li>Delete</li>
            </ul>
            {products.length>0?(
                products.map((item,index)=>{
                    return(
                        <ul>
                            <li>{index+1}</li>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li>{item.category}</li>
                            <li>{item.company}</li>
                            <li><button><Link to={'/update/'+item._id} >Update</Link></button></li>
                            <li><button onClick={()=>deleteRecord(item._id)}>Delete</button></li>
                        </ul>
                    )}
                )):<div>no product found</div>
            }
        </div>
    )
}

export default Myproduct;