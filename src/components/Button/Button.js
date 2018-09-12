import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'

const dynamicStyles = ({ theme, disabled }) => css`
  background: ${disabled ? theme.colors.text.disabled : theme.colors.ui.fill7};
  &:focus {
    outline-color: ${theme.colors.state.keyLight};
  }
  &:hover {
    background: ${disabled ? null : theme.colors.ui.fill8}
  }
  &:active {
    background: ${disabled ? null : theme.colors.ui.fill6}
  }
  border-radius: ${theme.borderRadius.xs};
  color: ${theme.colors.text.primary}
`

const StyledButton = styled('button')`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: 0;
  padding: 10px;
  box-sizing: border-box;
  ${dynamicStyles};
`

const Button = (props) => {
  return (
    <StyledButton
      {...props}
      className={cx(props.className)}>
      { props.children }
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Button
