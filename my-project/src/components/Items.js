import React, {useState, useEffect} from 'react';

function Items (){
    const [products, setProducts] = useState([])
    useEffect(() => {
    fetch('Products.json',{
        headers:{
            'Content-Type':'appliction/json',
            // 'Accept':'application/json'
        }
    })
    .then(response => response.json())
.then(Products => setProducts(Products))
}, []);

  return (
<div className="grid-container">
  {products.map((product) => (
    <div className='grid-item' key={product.id}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
</div>
  ))}
   </div>
   );
}

export default Items;
