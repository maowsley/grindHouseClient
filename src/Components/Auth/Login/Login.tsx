import React, {Component} from "react";
import './Login.css';

import APIURL from '../../../helpers/environment';
//sign up props
type uData = {
    username: string;
    password: string;
    role: any;
};


class Login extends React.Component<{}, uData> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: " ",
            password: " ",
            role: " "
        };
    }
    //Compoeneted did mounur ia uaed next 
    componentDidMount = () =>  {
        fetch(`${APIURL}/user/login`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                username: json,
                password: json,
                role: json
            });
        })

    }

    render() {
        return (
            <div className="mainDiv">
                <div className="Login">
                  <Login />  
                </div>
            </div>
        )
    }
}

export default Login;