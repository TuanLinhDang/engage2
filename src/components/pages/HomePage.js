import React from 'react';
import { Link } from 'react-router-dom';
import HeaderForm from '../forms/HeaderForm';
import PostForm from '../forms/PostForm';
import Navigation from '../forms/Navigation';
import {Container, Divider, Header, Icon, Image} from 'semantic-ui-react';
import {firebaseApp} from '../../firebase';
const HomePage = () => (
    <div >
      <HeaderForm/>
      <hr/>
      <div style={{float:'left'}}>
        <Navigation/>
      </div>
      <div style={{float:'left', marginLeft:'20px'}}>
      <PostForm/>
      </div>
    </div>

);

export default HomePage;
