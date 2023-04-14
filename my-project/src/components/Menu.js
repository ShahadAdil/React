import React from 'react'
import Items from './Items';

const Menu = () => {
    return (
        // <div className="grid-container">
        //     <div>
        //         <h1 ckassName="title">MENU</h1>
        //     </div>
        //     <div className="grid-item">
        //         <img src="images/choklad2.PNG" alt="chocolate"></img>
        //         <h2>1</h2>
        //         <h3>1</h3>
        //     </div>
        // </div>
      <div>

      <div className='container'>
        <div className='line'></div>
        {/* <div className='footer container'> */}
      <h3 className='txt text-white'>WE HAVE MEALS AND A SET MENU</h3>
        </div>
        {/* </div> */}

         { <Items /> }
      </div>
    )
}

export default Menu
