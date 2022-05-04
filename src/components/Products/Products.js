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
                            <Link to="/products">
                            <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
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