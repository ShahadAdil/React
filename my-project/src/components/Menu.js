import React from 'react'
import Items from './Items';
// import {UserContext} from './UserContextPage'
// import styled from 'styled-components';

const Menu = () => {
    return (
      <div>
{/* <UserContext>
   {(user) => <h3>{user.title}</h3>}
</UserContext> */}

      <div className='container'>
        <div className='line'></div>
      <h3 className='txt text-white'>WE HAVE MEALS AND A SET MENU</h3>
        </div>

         { <Items /> }
      </div>
    )
}

export default Menu

// const Div = styled.div`
// background-color: rgb(155, 5, 5);
// box-shadow:  50px  rgb(155, 5, 5);
// height: 2px;
// width: 100%;
// `
// const H3 = styled.h3`
// display: flex;
// justify-content: center;
// margin: 40px;
// `
