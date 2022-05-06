import React from "react";
<<<<<<< HEAD
import validator from 'validator';
import {TextField} from "@material-ui/core";
import Star from "./Star.js";
import axios from "axios";


class Yminsignup extends React.Component {

  constructor(){
    super()
    this.state={role:"student",emailerror:true,confirmerror:true,password:"",confirm:"",email:"",name:"",lastname:""}
    this.handleMail=this.handleMail.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleConfirm=this.handleConfirm.bind(this)}
  

    handleSubmit = async event =>{
      event.preventDefault();
        if (this.state.role==="student" && this.state.emailerror === false && this.state.confirmerror === false)
        {
        try {

        
       await axios.post("/user/signup",{name:this.state.name,lastname:this.state.lastname,email:this.state.email,password:this.state.password})


        localStorage.setItem('firstLogin', true)

        
        window.location.href = "http://localhost:3000/login"
      } catch (err) {
        alert(err.response.data.msg)
    }
  }
  else if (this.state.role==="Recruiter" && this.state.emailerror === false && this.state.confirmerror === false)        
   {
    try {

    
   await axios.post("/recruiter/signup",{name:this.state.name,lastname:this.state.lastname,email:this.state.email,password:this.state.password})


    localStorage.setItem('firstLogin', true)

    
    window.location.href = "http://localhost:3000/login"
  } catch (err) {
    alert(err.response.data.msg)
}
}

    }
  
  
   handleMail = (e) => {
    var email = e.target.value
    if (validator.isEmail(email)) {
      this.setState({
        email: email,
        emailerror:false
      })
    } else {
      this.setState({
        email: email,
        emailerror:true
      })
  }
}
handleConfirm = (e) => {
  var confirm = e.target.value
  this.setState({confirm:confirm})
  if (confirm===this.state.password) {
    this.setState({
      confirmerror:false
    })
  } else {
    this.setState({
      confirmerror:true
    })
}
}
handleName = (e) => {
  var name = e.target.value
  this.setState({name:name})
}
handlelastName = (e) => {
  var lastname = e.target.value
  this.setState({lastname:lastname})
}

handlePassword = (e) => {
  var password = e.target.value
  this.setState({password:password})
}
handlerole = (e) => {

  var role = e.target.value
  console.log(role)
  this.setState({role:role})
}


  render(){
  return (
      <div style={{width:"400px",paddingLeft:"400px"}} >
      <pre>
        <Star texte="Créer un nouveau compte"/>
        <form>
        <TextField fullWidth label="name:" type="name" id="Name"  name="name" onChange={(e) => this.handleName(e)}/> 
        <br />
        <TextField fullWidth label="lastname:" type="name" id="lastname"  name="lastname" onChange={(e) => this.handlelastName(e)}/> 
        <br />
        <br />


  <label>
Your role          <br />
          <br />
          <select value={this.state.value} onChange={(e) => this.handlerole(e)}>            
          <option value="student">student</option>
            <option value="Recruiter">Recruiter</option>

          </select>
        </label>


        <br />
        <br />

        <TextField fullWidth label="Entrer votre mail" type="text" id="userEmail"  name="email" onChange={(e) => this.handleMail(e)} color={this.state.emailerror?"secondary":"primary"}/>

        <br/>
        <TextField fullWidth label="Entrer votre mot de passe" type="password" id="userPassword"  name="password" onChange={(e)=> this.handlePassword(e)} /> 
        <br />
        <TextField fullWidth label="Confimer votre mot de passe" type="password" id="userConfirm"  name="confirm" onChange={(e)=> this.handleConfirm(e)} color={this.state.confirmerror?"secondary":"primary"} />       
        <br />
        <br/>
        <TextField  type="submit" value="Envoyer" onClick={this.handleSubmit} align="middle"/>
        </form>
        <br/>
      </pre>
      
    </div>
  );}
}
  
export default Yminsignup
=======
import validator from "validator";
import { TextField } from "@material-ui/core";
import Star from "./Star.js";
import axios from "axios";

class Yminsignup extends React.Component {
  constructor() {
    super();
    this.state = {
      emailerror: true,
      confirmerror: true,
      password: "",
      confirm: "",
      email: "",
      username: "",
    };
    this.handleMail = this.handleMail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleSubmit = async (event) => {
    if (this.state.emailerror === false && this.state.confirmerror === false) {
      try {
        event.preventDefault();
        await axios.post("/user/signup", {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        });

        localStorage.setItem("firstLogin", true);
        window.location.href = "/login";
      } catch (err) {
        alert(err.response.data.msg);
      }
    }
  };

  handleMail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      this.setState({
        email: email,
        emailerror: false,
      });
    } else {
      this.setState({
        email: email,
        emailerror: true,
      });
    }
  };
  handleConfirm = (e) => {
    var confirm = e.target.value;
    this.setState({ confirm: confirm });
    if (confirm === this.state.password) {
      this.setState({
        confirmerror: false,
      });
    } else {
      this.setState({
        confirmerror: true,
      });
    }
  };
  handleName = (e) => {
    var username = e.target.value;
    this.setState({ username: username });
  };

  handlePassword = (e) => {
    var password = e.target.value;
    this.setState({ password: password });
  };

  render() {
    return (
      <div style={{ width: "400px", paddingLeft: "400px" }}>
        <pre>
          <Star texte="Créer un nouveau compte" />
          <form>
            <TextField
              fullWidth
              label="Entrer votre nom d'utilisateur"
              type="name"
              id="userName"
              name="name"
              onChange={(e) => this.handleName(e)}
            />
            <br />

            <TextField
              fullWidth
              label="Entrer votre mail"
              type="text"
              id="userEmail"
              name="email"
              onChange={(e) => this.handleMail(e)}
              color={this.state.emailerror ? "secondary" : "primary"}
            />

            <br />
            <TextField
              fullWidth
              label="Entrer votre mot de passe"
              type="password"
              id="userPassword"
              name="password"
              onChange={(e) => this.handlePassword(e)}
            />
            <br />
            <TextField
              fullWidth
              label="Confimer votre mot de passe"
              type="password"
              id="userConfirm"
              name="confirm"
              onChange={(e) => this.handleConfirm(e)}
              color={this.state.confirmerror ? "secondary" : "primary"}
            />
            <br />
            <br />
            <TextField
              type="submit"
              value="Envoyer"
              onClick={this.handleSubmit}
              align="middle"
            />
          </form>
          <br />
        </pre>
      </div>
    );
  }
}

export default Yminsignup;
>>>>>>> 515ada2b4e0e27a6c7d7af157568f3251ddc532c
