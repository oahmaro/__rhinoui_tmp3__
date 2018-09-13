import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

const dynamicStyles = ({ theme }) => css`
  background: ${theme.colors.ui.fill3};
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
    <StyledBackground {...props} />
  )
}

Background.propTypes = {
  className: PropTypes.string
}

export default Background
