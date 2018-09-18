import React, { Component } from 'react'
import { Box, Button, LayoutBtns } from 'rhinoui-refactor'
import styled, { css } from 'react-emotion'

const KeyButtonDynamicStyles = ({ theme }) => css`
  font-size: ${theme.sizes.xs};
  background: ${theme.colors.state.key};
  color: ${theme.colors.text.base};
  &:focus {
    border-width: 1px;
    border-style: solid;
    border-color: ${theme.colors.state.warning};
    outline: none;
  }
  &:hover {
    background: ${theme.colors.state.keyDark1};
  };
  &:active {
    background: ${theme.colors.state.keyDark2};
  };
  border-radius: ${theme.borderRadius.xs}
`

const WorkspaceButtonDynamicStyles = ({ theme }) => css`
  font-size: ${theme.sizes.xs};
  background: ${theme.colors.ui.fill4};
  color: ${theme.colors.text.disabled};
  &:focus {
    color: ${theme.colors.text.primary};
    outline: none;
  }
  &:hover {
    color: ${theme.colors.text.primary};
    background: ${theme.colors.ui.fill4};
  };
  &:active {
    color: ${theme.colors.text.secondary};
    background: ${theme.colors.ui.fill4};
  };
`

const PanelDynamicStyles = ({ theme }) => css`
  background: ${theme.colors.ui.fill4};
  border-color: ${theme.colors.ui.fill1};
`

const KeyButton = styled(Button)`
  user-select: none;
  height: 24px;
  width: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
  ${KeyButtonDynamicStyles};
`

const WorkspaceButton = styled(Button)`
  user-select: none;
  height: 21px;
  width: 63px;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  margin: 0 35px;
  ${WorkspaceButtonDynamicStyles}
`

const StyledPanel = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.25);
  ${PanelDynamicStyles}
`

const ContainerA = styled(Box)`
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
`

const ContainerB = styled(Box)`
  flex: 1;
  justify-content: center;
  ${PanelDynamicStyles}
`

const ContainerC = styled(Box)`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: flex-end;
`

class WorkspacePanel extends Component {
  render() {
    return (
      <StyledPanel>
        <ContainerA>
          <KeyButton
            onMouseEnter={() => this.props.displayMessage('CREATE :', 'Click to create a new record.')}
            onMouseLeave={this.props.clearMessage}>
            CREATE
          </KeyButton>
        </ContainerA>
        <ContainerB>
          <WorkspaceButton 
            onMouseEnter={() => this.props.displayMessage('EDIT :', 'Click to open EDIT menu.')}
            onMouseLeave={this.props.clearMessage}>
            EDIT
          </WorkspaceButton>
          <WorkspaceButton
            onMouseEnter={() => this.props.displayMessage('VIEW :', 'Click to open VIEW menu.')}
            onMouseLeave={this.props.clearMessage}>
            VIEW
          </WorkspaceButton>
          <WorkspaceButton
            onMouseEnter={() => this.props.displayMessage('MORE :', 'Click to open MORE menu.')}
            onMouseLeave={this.props.clearMessage}>
            MORE
          </WorkspaceButton>
        </ContainerB>
        <ContainerC>
          {/* <SearchBox /> */}
          <LayoutBtns />
        </ContainerC>
      </StyledPanel>
    )
  }
}

export default WorkspacePanel