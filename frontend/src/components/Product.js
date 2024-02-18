import React,{useState,useEffect} from 'react'

const Product = ()=>{
    const [products,setproduct] = useState([])

    useEffect(()=>{
        getproduct()
    },[])

    const getproduct = async()=>{
    let data = await fetch("http://localhost:5000/products");
    data = await data.json();
    setproduct(data)
    }

    return(
        <div className='products'>
            <ul>
                <li>S No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
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
                        </ul>
                    )}
                )):<div>no product found</div>
            }
        </div>
    )
}

export default Product;