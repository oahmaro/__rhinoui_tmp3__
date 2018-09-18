import React, { Component } from 'react'
import { Box, Card } from 'rhinoui-refactor'
import styled from 'react-emotion'

const GridLayout = styled(Box)`
  flex-wrap: wrap;
  margin: 10px;
`

const data = [
    {
        id: 1,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: true
    },
    {
        id: 2,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: false
    },
    {
        id: 3,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: false
    },
    {
        id: 4,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: false
    },
    {
        id: 5,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: false,
    },
    {
        id: 6,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: true
    },
    {
        id: 7,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: true
    },
    {
        id: 8,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: false
    },
    {
        id: 9,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: false
    },
    {
        id: 10,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: false
    },
    {
        id: 11,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: true
    },
    {
        id: 12,
        icon: 'person',
        title: 'Osama Ahmaro',
        fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
        tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}],
        disabled: false
    },
]
class Grid extends Component {
    state = {
        sel: []
    }

    handleSelect = (id) => {
        this.setState({
            sel: [id]
        })
        console.log(this.state)
    }

    handleMultiSelect = (id) => {
        this.setState((prevState) => {
            
            return {
                sel: [...prevState.sel, id]
            }})
        console.log(this.state)

    }

    render() {
        return (
            <GridLayout>
                {data.map((record) => <Card key={record.id} disabled={record.disabled} onClick={() => this.handleSelect(record.id)} record={record}/>)}
            </GridLayout>
        )
    }
}

export default Grid