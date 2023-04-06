import React,{useState} from 'react';


function SkickaPostAdress(){
    const [email, setEmail] = useState("");

// class SkickaPostAdress  extends component{
    // const postadress={
    //     height: '40px',
    //     width: '300px',
    //     borderRadius: '30px',
    //     color: 'rgb(190, 30, 182)',
    //     border: 'white 2px solid',
    //     fontWeight: '600',
    //     padding:'10px',
    //     margin:'10px'
    // }

    // const skicka={
    //     height: '45px',
    //     width: '90px',
    //     borderRadius: '30px',
    //     color: 'rgb(190, 30, 182)',
    //     border: 'rgb(190, 30, 182) 2px solid',
    //     fontWeight: '700',
    // }

//     state = {
//         email: ''
//     }
//     handleChange = (e) =>{
//         this.setState({
//             email : e.target.value
//         })
//     }

//     handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log(this.state.email)
//     }
// render(){
  return (
    // <form onSubmit={this.handleSubmit}>
    //     <input onChange={this.handleChange} type='email' placeholder='Din e-postadress' value={email} ></input>
    //     <button className='btn-btn' >SKICKA</button>
    // </form>
      <form>
      <input value={email} type='email' placeholder='Din e-postadress' className='postadress'></input>
      <button className='skicka'>SKICKA</button>
  </form>
  )
}
// }

export default SkickaPostAdress;
