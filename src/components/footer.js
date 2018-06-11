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
      <Menu icon borderless >
        <Menu.Item
        position = 'right'
        name='mail'
        active={activeItem === 'mail'}
        onClick={this.handleItemClick}>
          <Icon name='mail' />
        </Menu.Item>

        <Menu.Item
          position = 'right'
          name='linkedin '
          active={activeItem === 'linkedin'}
          onClick={this.handleItemClick}>
          <Icon name='linkedin' />
        </Menu.Item>

        <Menu.Item
          position = 'right'
          name='github'
          active={activeItem === 'github'}
          onClick={this.handleItemClick}>
          <Icon name='github' />
        </Menu.Item>
      </Menu>
    )
  }
}
