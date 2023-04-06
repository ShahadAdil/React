import React from 'react';


function FooterContent  (props) {

  return (
    <dliv >
            <svg xmlns={props.xmlns} width={props.width} height={props.height} fill={props.fill} className={props.className} viewBox={props.viewBox}>
  <path d={props.d} />
</svg>





        {/* <div>
            <p className='text-white text-center container'>© 2023 Copyright: resturangname </p>
        </div> */}
    </dliv>
  )
}

export default FooterContent
