import React from 'react';
import {Menu} from 'semantic-ui-react';

export default class Navigation extends React.Component{
state = { activeItem: 'HomePage' }

 handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 render() {
   const { activeItem } = this.state
    return(
      <div>
        <Menu pointing vertical style={{padding: '3px'}}>
        <Menu.Item name='HomePage' active={activeItem === 'HomePage'} onClick={this.handleItemClick} />
         <Menu.Item name='Speaking' active={activeItem === 'Speaking'} onClick={this.handleItemClick} />
         <Menu.Item name='Reading' active={activeItem === 'Reading'} onClick={this.handleItemClick} />
         <Menu.Item name='Listening' active={activeItem === 'Listening'} onClick={this.handleItemClick} />
         <Menu.Item name='Writing' active={activeItem === 'Writing'} onClick={this.handleItemClick} />
         <Menu.Item name='About Us' active={activeItem === 'About Us'} onClick={this.handleItemClick} />
       </Menu>
      </div>
    )
  }
}
