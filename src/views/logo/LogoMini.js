import React from 'react'
import logoMini from "./../../assets/img/logoMini.png"
import logo from "./../../assets/img/logo.png"

const source ={
    logoMini,
    logo
}
const LogoMini = (props)=>{
    if (props.src === 1) return (<span><img alt="logo"  width="70px" style={{borderRadius:"5px"}} src={source.logoMini}/></span>) 
    else if (props.src === 2 ) return (<span><img alt="logo" width="250px" style={{borderRadius:"5px"}} src={source.logo}/></span>)  
  }



  export default LogoMini