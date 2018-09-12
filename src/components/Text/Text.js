import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx, css } from 'react-emotion'
import { withTheme } from 'emotion-theming'

const dynamicStyles = ({ theme, link, translation }) => css`
  font-family: ${theme.font};
  font-size: ${theme.sizes.base};
  direction: ${((theme.lang === 'ar' && !!translation) && 'rtl')};
  color: ${link ? theme.styles.state.key : theme.styles.text.primary}
`

const Text = (props) => {
  const Tag = props.link ? 'a' : 'p'

  const StyledText = styled(Tag)`
  display: inline;
  margin: 0;
  text-decoration: none;
  ${dynamicStyles}
`
  return (
    <StyledText
      {...props}
      className={cx(props.className)}>
      { props.theme.lang === 'en' ? props.children : props.translation || props.children }
    </StyledText>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  link: PropTypes.bool,
  translation: PropTypes.string
}

export default withTheme(Text)
