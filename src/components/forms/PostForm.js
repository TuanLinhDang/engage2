import React from 'react';
import {Form, Button, Dropdown} from 'semantic-ui-react';

export default class PostForm extends React.Component{
  render(){
    return(
      <Form style={{width: '600px'}}>
        <Form.Field>
          <label htmlFor="Title"></label>
          <input type="text"
            id="title"
            name="title"
            placeholder="Post Title"
            //onChange={event => this.setState({title: event.target.value})}
          />
          <label htmlFor="Topic"></label>
          <input type="text"
            id="topic"
            name="topic"
            placeholder="Topic"
            //onChange={event => this.setState({topic: event.target.value})}
          />
          <label htmlFor="Content"></label>
          <input type="text"
            id="content"
            name="content"
            placeholder="Content"
            //onChange={event => this.setState({content: event.target.value})}
          />
          <label htmlFor="Media"></label>
          <input type="text"
            id="media"
            name="media"
            placeholder="Image or Media URL"
            //onChange={event => this.setState({content: event.target.value})}
          />
        </Form.Field>
        <Button primary>Cancel</Button>
        <Button primary>Post</Button>
        </Form>
    )
  }
}
