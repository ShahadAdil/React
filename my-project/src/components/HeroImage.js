import React from 'react'
import  {Link}  from 'react-router-dom';
// import styled from 'styled-components';

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

// const Img = styled.img`
// position: relative;
// height: 80vh;
// width: 100%;
// background-size: cover;
// background-position: center;
// `


// const H1 = styled.h1`
// position: absolute;
// top: 40%;
// left: 10%;
// background: none;
// color: white;
// `

// const H3 = styled.h3`
// position: absolute;
// top: 50%;
// left: 10%;
// background: none;
// color: white;
// `
// const P = styled.p`
// position: absolute;
// top: 56%;
// left: 10%;
// background: none;
// color: white;
// width: 40%;
// `

// const Button = styled.button`
// position: absolute;
// top: 70%;
// left: 10%;
// background: none;
// color: white;
// width: 40%;
// box-shadow: 1px 3px 5px  rgb(155, 5, 5);
// `
