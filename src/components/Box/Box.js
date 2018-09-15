import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
// import { withTheme } from 'emotion-theming'

const StyledBox = styled('div')`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  z-index: 1;
  box-sizing: border-box;
`

const Box = (props) => {
  return (
    <StyledBox {...props}>
      { props.children }
    </StyledBox>
  )
}

Box.propTypes = {
  children: PropTypes.node
}

export default Box
