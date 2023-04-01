import React, {useState, useEffect} from 'react'

function Items (){
    const [items, setItems] = useState([])
    useEffect(() => {
    fetch('Products.json',{
        headers:{
            'Content-Type':'appliction/json',
            // 'Accept':'application/json'
        }
    })
    .then(response => response.json())
.then(Products => setItems(Products))
}, []);

  return (
<div className="grid-container">
  {products.map((product) => (
    <div className='grid-item' key={product.id}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} Kr</p>
</div>
  ))}
   </div>
   );
}

export default Items;
