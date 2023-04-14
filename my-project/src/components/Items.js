import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Items() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('Products2.json', {
            headers: {
                'Content-Type': 'appliction/json'
                // 'Accept':'application/json'
            }
        })
            .then((response) => response.json())
            .then((Products) => setProducts(Products))
    }, [])
    if (null) {
        return (
            <div className="grid-container text-white">
                <h1>An error occurred and will be fixed</h1>
            </div>
        )
    } else {
        return (
            <div className="grid-container">
                {products.map((product) => (
                    <div className="grid-item" key={product.id}>
                        <Link to="/itemsDetails/:id">
                            <img src={product.image} alt={product.title} className='items-img'/>
                        </Link>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Items
