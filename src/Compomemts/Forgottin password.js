// This is used to reset your password
import React from 'react'
import logo from "../img/goglogo.png";
import './css/forgottinPassword.css'
import MyFooter from "./Footer";

// This is the post function
function loginPost(url='',data={}){
    return fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
}

class ResetPass extends React.Component{
    constructor(props) {
        super(props);
        this.submitButton = this.submitButton.bind(this)
    }
    submitButton(){
        const resetEmail = document.getElementById('resetEmail').value
        resetEmail.trim()
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if(resetEmail.match(pattern)){
            loginPost('/reset-pass',{
                Email: resetEmail
            })
                .then()
            alert('Please check your email')
            window.location.href='/login'

        }
        else {
            alert('Email is not valid ')
        }
    }

    render() {
        return(
            <div className={'PassReset'}>
                <img alt={'Gog logo'} src={logo}/>
                <h2>Please enter email</h2><br/>
                <input id={'resetEmail'}/><br/>
                <button onClick={this.submitButton}>Submit</button>
                <div className='myFooter'><MyFooter/></div>
            </div>
        )
    }

}
export default ResetPass
