import React from 'react'

const Logo = () => {
    const style ={
        width:'400px',
        display:'flex',
        margin:'auto',
    }

    // const Click = () => {

    // }
  return (
    <div>
    <div className='logo'></div>
   {/* <input className='search' placeholder='Sök...' /> */}
   <img src="images/MRCAKE.PNG" alt="chocolate" style={style}></img>
   <button className='btn-btn' >VARUKORG</button>
    </div>
  )
}

export default Logo
