import React from 'react'

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
