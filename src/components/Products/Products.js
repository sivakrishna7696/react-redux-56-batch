import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {
    const [products,setProducts] = useState([]);

    const getProducts = async() =>{
        const {data} = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);     
        }

    useEffect(()=>{
        getProducts();
    },[])

  return (
    <div>
        <div className="container py-5">
            <div className='row'>
                {
                    products && products.length>0 && products.map((product)=>(
                        <div className='col-md-3'>
                            <Link className='text-dec' to={`/products/${product.id}`}>
                            <div className="card p-4">
                            <img src={product.image} className="card-img-top " alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <h3>price : ${product.price}</h3>
                                <p className="card-text">{product.category}</p>
                            </div>
                            </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products