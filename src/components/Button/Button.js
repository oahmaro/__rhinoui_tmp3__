import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'

const dynamicStyles = ({ theme, disabled }) => css`
  background: ${disabled ? theme.styles.text.disabled : theme.styles.ui.fill7};
  &:focus {
    outline-color: ${theme.styles.state.keyLight};
  }
  &:hover {
    background: ${disabled ? null : theme.styles.ui.fill8}
  }
  &:active {
    background: ${disabled ? null : theme.styles.ui.fill6}
  }
  border-radius: ${theme.borderRadius.xs};
`

const StyledButton = styled('button')`
  display: flex;
  border: 0;
  padding: 10px;
  box-sizing: border-box;
  ${dynamicStyles};

`

const Button = (props) => {
  return (
    <StyledButton {...props} style={props.style} className={cx(props.className)}>
      { props.children }
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}
export default Button
