import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'

class Rhino extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.string,
    lang: PropTypes.string,
    data: PropTypes.object
  }

  setTheme = (theme) => {
    this.setState({ theme })
  }

  setLanguage = (lang) => {
    this.setState({ lang })
  }

  state = {
    theme: this.props.theme || 'dark',
    lang: this.props.lang || 'en',
    styles: this.props.data || {},
    setTheme: this.setTheme,
    setLang: this.setLanguage
  }

  render() {
    const { theme, lang, styles, setTheme, setLang } = this.state
    const sizes = styles.lang[lang].fontSize || {}
    const value = {
      theme,
      lang,
      sizes: sizes,
      styles: styles.theme[theme],
      breakpoints: styles.breakpoints,
      borderRadius: styles.borderRadius,
      setTheme,
      setLang
    }
    return (
      <ThemeProvider theme={value}>
        <Fragment>
          { this.props.children }
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default Rhino
