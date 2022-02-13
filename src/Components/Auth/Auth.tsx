import { AnyNsRecord } from "dns";
import React, {Component} from "react"
import Login from "./Login/Login";
import Register from "./Register/Register";

class Auth extends React.Component {
    constructor(props:any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
           <div className="mainDiv">
               <div className="Auth">
                   <Register />
                   <Login />
               </div>
           </div>
        )
    }
}



export default Auth;


