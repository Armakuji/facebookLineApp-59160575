import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';
import axios from 'axios';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : "Name Surname ",
            email : "Who_Are_You@example.com",
            picture : "https://bulma.io/images/placeholders/96x96.png"
        }
        this.responseFacebook = this.responseFacebook.bind(this)
    }

    responseFacebook(response){
        console.log(response)

        this.setState({
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })

        var data={
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        }

        axios.post("http://localhost:3000/user", data).then((res) =>{
            console.log(res)
        })
    }

    render(){
        return(
            <div className="Register">
                <FacebookLogin 
                    appId='253039525393926'
                    fields = "name,email,picture"
                    callback={this.responseFacebook}
                    render={(renderProps) => (
                        <button onClick={renderProps.onClick}>Facebook</button>
                    )}
                />

                <div>
                    <figure>
                        <img src={this.state.picture} alt="Not Found"/>
                    </figure>
                </div>

                <div>
                    <p>{this.state.name}</p>
                    <p>{this.state.email}</p>
                </div>
            </div>
        )
    }
}

export default Register;
