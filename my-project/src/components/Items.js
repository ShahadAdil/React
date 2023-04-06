import React, { useState, useEffect } from 'react'

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
            <div className="grid-container">
                <h1>Helloooooooooo</h1>
            </div>
        )
    } else {
        return (
            <div className="grid-container">
                {products.map((product) => (
                    <div className="grid-item" key={product.id}>
                        {/* <a href="/Product"> */}
                            <img src={product.image} alt={product.title} className='items-img'/>
                        {/* </a> */}
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Items
