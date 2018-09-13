import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { icons } from './data.js'

const pathDynamicStyles = ({ theme, color }) => css`
  fill: ${color || theme.colors.text.primary};
`

const iconDynamicStyles = ({ theme }) => css`
  width: ${theme.sizes.md};
`

const StyledPath = styled('path')`
  ${pathDynamicStyles};
`

const StyledIcon = styled('svg')`
  ${iconDynamicStyles};
`
const Icon = (props) => {
  return (
    <StyledIcon {...props} viewBox='0 0 512 512'>
      <StyledPath {...props} d={icons[props.icon]} />
    </StyledIcon>
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
