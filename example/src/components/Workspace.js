import React, { Component } from 'react'
import { Box } from 'rhinoui-refactor'
import styled from 'react-emotion'
import Grid from './Grid'
// import List from './List'

const Container = styled(Box)`
  position: absolute;
  top: 72px;
  left: 0;
  bottom: 33px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

class Workspace extends Component {
  render() {
    return (
      <Container>
        <Grid />
      </Container>
    )
  }
}

export default Workspace