import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

const dynamicStyles = ({ theme, disabled }) => css`
  font-family: ${theme.font};
  background: ${disabled ? theme.colors.text.disabled : theme.colors.ui.fill7};
  &:focus {
    outline-color: rgba(37, 204, 172, 1);
  }
  &:hover {
    background: ${disabled ? null : theme.colors.ui.fill8}
  }
  &:active {
    background: ${disabled ? null : theme.colors.ui.fill6}
  }
  &::selection {
    color: ${theme.colors.text.base};
    background: rgba(204, 204, 203, 0.1);
  }
  border-radius: ${theme.borderRadius.xs};
  color: ${theme.colors.text.primary};
`

const StyledButton = styled('button')`
  display: flex;
  flex-shrink: 0;
  cursor: pointer;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  ${dynamicStyles};
`

const Button = (props) => {
  return (
    <StyledButton
      {...props}>
      { props.children }
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node
}

export default Button
