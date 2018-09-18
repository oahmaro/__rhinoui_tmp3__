import React, { Component } from 'react'
import { Box, Text } from 'rhinoui-refactor'
import styled, { css } from 'react-emotion'
import PropTypes from 'prop-types'

const PanelDynamicStyles = ({ theme }) => css`
  background: ${theme.colors.ui.fill4};
  border-color: ${theme.colors.ui.fill1};
`

const StyledPanel = styled(Box)`
  box-sizing: unset;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  height: 32px;
  border-top-width: 1px;
  border-top-style: solid;
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.25);
  ${PanelDynamicStyles}
`

const helpMessageDynamicStyles = ({ theme }) => css`
  font-size: ${theme.sizes.xs};
`

const headerDynamicStyles = ({ theme }) => css`
  color: ${theme.colors.text.secondary}
`

const StyledHeader = styled(Text)`
  margin-left: 10px;
  user-select: none;
  line-height: 32px;
  ${helpMessageDynamicStyles}
`

const StyledBody = styled(Text)`
  margin-left: 5px;
  user-select: none;
  line-height: 32px;
  ${helpMessageDynamicStyles}
  ${headerDynamicStyles}
`

class InfoPanel extends Component {
  static propTypes = {
    helpMessage: PropTypes.shape({
      header: PropTypes.string,
      body: PropTypes.string
    })
  }

  static defaultProps = {
    helpMessage: {
      header: '',
      body: ''
    }
  }
  
  render() {
    return (
      <StyledPanel>
        <Box>
          <StyledHeader>{ this.props.helpMessage.header }</StyledHeader>
          <StyledBody>{ this.props.helpMessage.body }</StyledBody>
        </Box>
      </StyledPanel>
    )
  }
}

export default InfoPanel