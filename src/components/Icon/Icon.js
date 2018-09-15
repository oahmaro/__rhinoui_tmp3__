import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { icons } from './data.js'
import Box from '../Box'

const pathDynamicStyles = ({ theme, color }) => css`
  fill: ${color || theme.colors.text.primary};
`

const containerDynamicStyles = ({ theme, size }) => css`
  width: ${(size && (size + 'px')) || theme.sizes.lg};
  height: ${(size && (size + 'px')) || theme.sizes.lg};
`

const StyledPath = styled('path')`
  ${pathDynamicStyles};
`

const StyledIcon = styled('svg')`
  height: -webkit-fill-available;
  width: -webkit-fill-available;
`

const Container = styled(Box)`
  ${containerDynamicStyles}
`

const Icon = (props) => {
  return (
    <Container {...props}>
      <StyledIcon viewBox='0 0 512 512'>
        <StyledPath d={icons[props.icon]} />
      </StyledIcon>
    </Container>
  )
}

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOf([
    'person',
    'app',
    'notification',
    'search',
    'close',
    'tag',
    'tagChecked',
    'grid',
    'list',
    'kanban1',
    'kanban2',
    'help',
    'plus',
    'minus',
    'danger',
    'rightArrow',
    'leftArrow',
    'collapsedArrow',
    'expandedArrow',
    'pencil',
    'move',
    'addColumn',
    'attachment',
    'smiley1',
    'smiley2',
    'comment',
    'like',
    'tick',
    'record',
    'server',
    'rhino',
    'rhinoText'
  ])
}

export default Icon
