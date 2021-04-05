// This component will display when email link is clicked
import React from "react";
import { useLocation } from 'react-router-dom'
import qs from 'query-string'

export default function NewPass(){
    const { search } = useLocation()
    const { token } = qs.parse(search)
    console.log(token)
    sessionStorage.setItem("token",token)
    window.location.href='/New'



    return(
        <div>
            <h1>Password reset</h1>
        </div>
    )
}





