import React from 'react'
import AboutS from './AboutProps.tsx'
// import styled from 'styled-components'

const AboutData = () => {
  return (
    <div className='about text-white container'>
        <AboutS title='Lorem ipsum'
        text='Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor
         in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.'

        />
    </div>
  )
}

export default AboutData

// const Div = styled.div `
// display: flex;
// justify-content: center;
// position: relative;
// height: 80vh;
// top: 60px;
// `
