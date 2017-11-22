import React from 'react';
import {Form, Button, Input} from 'semantic-ui-react';
import { Link, withRouter} from 'react-router-dom';
import {button, Container, Divider, Header, Icon, Image} from 'semantic-ui-react';
import { firebaseApp } from '../../firebase';

class HeaderForm extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  logIn(){
    this.props.history.push('/login')
  }

  render(){
    return(
      <div style={{display: 'flex', marginTop:'10px'}}>
        <Header
            as='h4'
            content='EnGate'
            inverted
            style={{ textAlign:'left', color: 'blue', fontSize: '2em', fontWeight: 'normal', marginTop: '5px' }}
        />
       <Input style={{width:'400px', marginLeft:'150px'}} action='Search' placeholder='Search...' />
       <Button style={{width:'wrapped', height:'wrapped', marginLeft:'260px'}} primary>New Post</Button>
       <Button style={{width:'wrapped', height:'wrapped', marginLeft:'10px'}} primary onClick={()=>this.logIn()}>Login</Button>
    </div>
    )
  }
}


export default withRouter(HeaderForm);
