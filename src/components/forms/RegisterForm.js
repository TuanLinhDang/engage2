import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import { firebaseApp } from '../../firebase';
class RegisterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error:{
        message: ''
      }
  }
  }
  signUp(){
    console.log('this.state', this.state);
    const{ email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error})
    })
  }
render(){
  const {data} = this.state;
  return(
    <Form>
      <Form.Field>
        <label htmlFor="FirstName"/>
        <input type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"

        />
        <label htmlFor="LastName"/>
        <input type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"

        />
        <label htmlFor="Email"/>
        <input type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={event => this.setState({email: event.target.value})}
        />
        <label htmlFor="Password"/>
        <input type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={event => this.setState({password: event.target.value})}
        />
        <label htmlFor="ConfirmPassword"/>
        <input type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </Form.Field>
      <Button primary onClick={()=> this.signUp()}>Register</Button>
      <p style={{textAlign: 'Center', color: 'red'}}>{this.state.error.message}</p>
    </Form>

  )
}
}

export default withRouter(RegisterForm);
