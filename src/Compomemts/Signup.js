// This is the the sine up page

import React from 'react'
import logo from '../img/goglogo.png'
import './css/signup.css'
require('isomorphic-fetch')

class Signup extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className='signup'>
                <img src={logo}/>
            </div>
        )
    }
}


export default Signup
