import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { withTheme } from 'emotion-theming'

const dynamicStyles = ({ theme, link, translation }) => css`
  font-family: ${theme.font};
  font-size: ${theme.sizes.base};
  direction: ${((theme.lang === 'ar' && !!translation) && 'rtl')};
  color: ${link ? theme.colors.state.key : theme.colors.text.primary};
  &:focus {
    outline-color: ${theme.colors.state.keyLight};
  };
  &::selection {
    color: ${theme.colors.text.base};
    background: rgba(204, 204, 203, 0.1);
  }
`

const Text = (props) => {
  const Tag = props.link ? 'a' : 'p'

  const StyledText = styled(Tag)`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  text-decoration: none;
  ${dynamicStyles}
`
  return (
    <StyledText
      {...props}>
      { props.theme.lang === 'en' ? props.children : props.translation || props.children }
    </StyledText>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  translation: PropTypes.string // will be replaced with react-intl
}

export default withTheme(Text)
