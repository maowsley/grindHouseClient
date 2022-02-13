import React, {Component} from "react";
import './Register.css';

import APIURL from '../../../helpers/environment';
//sign up props
type SignUp = {
    username: string;
    password: string;
    role: any;
};


class Register extends React.Component<{}, SignUp> {
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
        fetch(`${APIURL}/user/signup`)
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
                <div className="Register">
                    
                </div>
            </div>
        )
    }
}

export default Register;