import React from 'react'
// import styled from 'styled-components'

interface AboutDataProps {
    title:string;
    text:string;
}

const AboutS = ({title,text}:AboutDataProps) => {
  return(
    <div>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
)
  }

export default AboutS

// const Div = styled.div`
// display: flex;
// justify-content: center;
// position: relative;
// height: 80vh;
// top: 60px;
// `

// const H1 = styled.h1`
// display: flex;
// justify-content: center;
// `
