import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import { firebaseApp } from '../../firebase';
class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  registerClick(){
    this.props.history.push("/register")
  }
  signIn(){
    console.log('this.state', this.state);
    const{email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error})
    })
  }
  render(){
    return(
    <Form>
      <Form.Field>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          onChange={event => this.setState({email: event.target.value})}
        />
        <label htmlFor="password"></label>
        <input type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={event => this.setState({password: event.target.value})}
        />
      </Form.Field>
      <Button primary onClick={()=> this.signIn()}>Login</Button>
      <Button primary onClick={()=>this.registerClick()}>Create An Account</Button>
      <p style={{textAlign: 'Center', color: 'red'}}>{this.state.error.message}</p>
    </Form>
  );
  }
}

export default withRouter(LoginForm);
