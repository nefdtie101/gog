// This component will render when you clicked on email link and token is stored to session storage
import React from "react";
import logo from "../img/goglogo.png"

class EnterPassword extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className={'PassReset'}>
                <img src={logo}/>
                <h1>Update your Password</h1>
                <input/>
                <input/>
            </div>
        )
    }
}
