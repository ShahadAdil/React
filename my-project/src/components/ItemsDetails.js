import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ItemsDetails = () => {
    // console.log(useParams())
const {id} = useParams();

const [product, setProduct] = useState({})
useEffect(() => {
    fetch(`/Products2.json/${id}`, {

    })
        .then((response) => response.json())
        .then((Products) => setProduct(Products))
}, [id])

return (
        <div className="grid-item" key={product.id}>
        <img src={product.image} alt={product.title} className='items-img'/>
        <h3 className='text-white container'>{product.title}</h3>
        <p className='text-white container'>{product.price}</p>
        <p className='text-white container'>{product.description}</p>
        </div>
)
}

export default ItemsDetails
