import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchproducts } from '../../redux/ActionCreators';
import { reducer } from '../../redux/reducer'

function Products() {
    // const [products,setProducts] = useState([]);
    const dispatch = useDispatch();

    const getProducts = async() =>{
        const {data} = await axios.get('https://fakestoreapi.com/products');
        // setProducts(data);     
        }

      const products = useSelector((state)=>state.productsData.products)
    //   console.log(state)

    useEffect(()=>{
        // getProducts();
        dispatch(fetchproducts());
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