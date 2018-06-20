import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';


class Nav extends Component {
constructor(props){
    super(props)
    this.state = {
      activeItem: ''
    }
  }

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name })}


  render(){
   const thisNav = props => ( <NavLink exact {...props} activeClassName="active"/>)

    return(
      <Menu pointing secondary className = 'nav' size='large'>
        <Menu.Item
          as= {thisNav}
          to= '/'
          name='Solomon Sokoya'
          />
        <Menu.Menu position='right'>
          <Menu.Item
            as= {thisNav}
            to= '/projects'
            name='Projects'
            />
          <Menu.Item
            name='Resume'
            to='/resume'
            name='Resume'
            />
        </Menu.Menu>
      </Menu>
      )
  }
}
export default withRouter(Nav)
