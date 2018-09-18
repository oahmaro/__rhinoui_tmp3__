import React, { Component } from 'react'
import { Rhino, Background } from 'rhinoui-refactor'
// import styled from 'react-emotion'
import { RhinoDesignSystem } from './utils/rhinoDesignSystem'
import MainPanel from './components/MainPanel'
import WorkspacePanel from './components/WorkspacePanel'
import InfoPanel from './components/InfoPanel'
import Workspace from './components/Workspace'
export default class App extends Component {
  state = {
    helpMessageHeader: '',
    helpMessageBody: ''
  }

  handleDisplayHelpMessage = ( header, body ) => {
    this.setState({
       helpMessageHeader: header,
       helpMessageBody: body
    })
  }

  handleClearhelpMessage = () => {
    this.setState({ 
      helpMessageHeader: '',
      helpMessageBody: ''
    })
  }

  render () {
    return (
      <Rhino lang='en' theme='dark' data={RhinoDesignSystem}>
        <Background />
        <MainPanel
          displayMessage={this.handleDisplayHelpMessage}
          clearMessage={this.handleClearhelpMessage}/>
        <WorkspacePanel 
          displayMessage={this.handleDisplayHelpMessage}
          clearMessage={this.handleClearhelpMessage}
        />
        <Workspace />
        <InfoPanel 
          helpMessage={{
          header: this.state.helpMessageHeader,
          body: this.state.helpMessageBody
        }}/>
      </Rhino>
    )
  }
}
