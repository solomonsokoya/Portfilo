import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class Footer extends Component {
  constructor(props){
    super(props)
  this.state = {
    activeItem: ''
  }
}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon borderless compact className='footer'>
        <Menu.Item
        name='mail'
        active={activeItem === 'mail'}
        onClick={this.handleItemClick}>
          <Icon name='mail' />
        </Menu.Item>

        <Menu.Item
          name='linkedin '
          active={activeItem === 'linkedin'}
          onClick={this.handleItemClick}>
          <Icon name='linkedin' />
        </Menu.Item>

        <Menu.Item
          name='github'
          active={activeItem === 'github'}
          onClick={this.handleItemClick}>
          <Icon name='github' />
        </Menu.Item>
      </Menu>
    )
  }
}
