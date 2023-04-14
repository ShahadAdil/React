import React from 'react'
import  {Link}  from 'react-router-dom';

const HeroImage = () => {

// const goTO = Link();

//     function goToMenu(){
// goTO('/menu')
//     }

    function goToMenu(){
// goTO('/menu')
alert('Thank you for choosing us...')
    }

  return (
    <div className='hero-image container'>
        <img src="images/HeroImg.PNG" alt="chocolate"></img>
        <div className='HeroImg-content'>
        <h1>BRUNCH</h1>
        <h3>CHECK OUT OUR MENU</h3>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        {/* <button  type='submit'>MENU</button> */}
        {/* <button onClick={goToMenu} type='submit'>MENU</button> */}
        <Link to="/menu">
                    <button onClick={goToMenu} type='submit'>MENU</button>
                </Link>
    </div>
    </div>
  )
}

export default HeroImage;
