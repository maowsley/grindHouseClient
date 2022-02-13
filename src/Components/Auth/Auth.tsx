//import { AnyNsRecord } from "dns";
import React, {Component} from "react"
import Login from "./Login/Login";
import Register from "./Register/Register";
import {useState, useEffect} from 'react';
/* import {
    BrowserRouter as Router,
    Router,
    Switch,
    Redirect
} from "react-router-dom";
//Token
type Session = {
    sessionToken: string,
    user_Username: string,
    user_id: string
} 



function Token() { */
     /*const [sessionToken, setSessionToken] = useState(undefined);
    const [user_Username, setUser_Username] = useState(" ");
    const [user_id, setUser_Id] = useState( " ");

    useEffect(() => {
        if(localStorage.getItem("token")) {
            setSessionToken(localStorage.getItem("token"));
        }
        if(localStorage.getItem("user_Username")) {
            setUser_Username(localStorage.getItem('user_Username'));
        }
        if(localStorage.getItem("user_id")) {
            setUser_Id(localStorage.getItem("user_id"));
        }
    }, [])

    const updateLocalStorage = (newToken, user, id) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('currentUser', user);
        localStorage.setItem('userID', id);
        setSessionToken(newToken);
        setCurrentUser(user);
        setUserID(id);
        console.log(sessionToken);
        console.log(user);
    }

    const clearLocalStorage = () => {
        localStorage.clear();
        setSessionToken(undefined);
        setCurrentUser('');
        setUserID('');
    }

    return(
        <div className="mainDiv">
            <Router>
            <div className="Token">
                <Switch>
                    <Redirect>

                    </Redirect>
                </Switch>

            </div>
            </Router>
        </div>
    )
}; */



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


