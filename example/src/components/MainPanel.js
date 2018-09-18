import React, { Component } from 'react'
import { Box, Button, Icon, Text } from 'rhinoui-refactor'
import styled, { css } from 'react-emotion'

const AppTitleDynamicStyles = ({ theme }) => css`
  font-size: ${theme.sizes.md};
`

const NotificationIconDynamicStyles = ({ theme }) => css`
  width: ${theme.sizes.sm};
`

const NotificationButtonDynamicStyles = ({ theme }) => css`
  fill: ${theme.colors.text.secondary};
  background: ${theme.colors.ui.fill6};
  &:focus {
    fill: ${theme.colors.text.primary};
    background: ${theme.colors.ui.fill9};
    outline: none;
  }
  &:hover {
    fill: ${theme.colors.text.primary};
    background: ${theme.colors.ui.fill9};
  }
  &:active {
    background: ${theme.colors.ui.fill7};
  }
`

const AppIconDynamicStyles = ({ theme }) => css`
  width: ${theme.sizes.base}
`

const PanelDynamicStyles = ({ theme }) => css`
  background: ${theme.colors.ui.fill6};
  border-color: ${theme.colors.ui.fill1};
`

const AppButtonDynamicStyles = ({ theme }) => css`
  background: ${theme.colors.ui.fill6};
  &:focus {
    background: ${theme.colors.ui.fill9};
    outline: none;
  }
  &:hover {
    background: ${theme.colors.ui.fill9};
  }
  &:active {
    background: ${theme.colors.ui.fill7};
  }
`

const AppTitle = styled(Text)`
  line-height: 36px;
  padding: 0 10px;
  user-select: none;
  border-radius: 0;
  ${AppTitleDynamicStyles}
`

const Panel = styled(Box)`
  justify-content: space-between;
  position: relative;
  z-index: 1;
  height: 36px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  ${PanelDynamicStyles}
`

const AppIcon = styled(Icon)`
  ${AppIconDynamicStyles};
  margin: 0 10px;
`

const AppButton = styled(Button)`
  border-radius: 0;
  ${AppButtonDynamicStyles}
`

const NotificationButton = styled(Button)`
  ${NotificationButtonDynamicStyles}
  margin: 0 10px;
`

const NotificationIcon = styled(Icon)`
  fill: inherit;
  ${NotificationIconDynamicStyles};
  margin: 0 10px;
`

class MainPanel extends Component {
  render() {
    return (
      <Panel>
        <Box>
          <AppButton 
            onMouseEnter={() => this.props.displayMessage('App Selector :', 'Click to switch between apps.')}
            onMouseLeave={this.props.clearMessage}>
            <AppIcon name='app'  />
          </AppButton>
          <AppTitle>Contacts</AppTitle>
        </Box>
        <Box>
        <NotificationButton 
            onMouseEnter={() => this.props.displayMessage('Notification :', 'Click to check your notifications.')}
            onMouseLeave={this.props.clearMessage}>
            <NotificationIcon name='notification' />
        </NotificationButton>
        </Box>
      </Panel>
    )
  }
}

export default MainPanel