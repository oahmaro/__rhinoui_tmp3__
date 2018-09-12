import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, cx } from 'react-emotion'

const dynamicStyles = ({ theme }) => css`
  background: ${theme.styles.ui.fill3};
`

const StyledBackground = styled('div')`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  position: absolute;
  ${dynamicStyles}
`

const Background = (props) => {
  return (
    <StyledBackground {...props} style={props.style} className={cx(props.className)} />
  )
}

Background.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default Background
