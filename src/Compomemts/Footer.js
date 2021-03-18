/*This is the generic footer component */

import React from "react";
import discord from "../img/discord.png";
import copy from "../img/Copywrite.png"
import './css/footer.css'


class Footer extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <footer>
                <a href='https://discord.gg/kSnwd7JE2H'><img src={discord}/></a>
                <p>©Gamers of Gondor</p>
            </footer>
        )
    }
}
export default Footer

