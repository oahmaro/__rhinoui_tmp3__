import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import Box from '../Box'
import Button from '../Button'
import Icon from '../Icon'
import Text from '../Text'

const CardDynamicStyles = ({ theme }) => css`
  border-color: ${theme.colors.ui.fill1};
  border-radius: ${theme.borderRadius.md};
  &:focus {
    outline 0;
    border-color: ${theme.colors.state.key};
  }
`

const titleDynamicStyles = ({ theme }) => css`
  font-size: ${theme.sizes.xs}
`

const fieldDynamicStyles = ({ theme }) => css`
  font-size: ${theme.sizes.xs};
  color: ${theme.colors.text.secondary}
`

const StyledCard = styled(Button)`
  user-select: none;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 255px;
  height: 110px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.25);
  border-width: 1px;
  border-style: solid;
  ${CardDynamicStyles}
`

const ContainerA = styled(Box)`
  justify-content: center;
  padding-top: 10px;
  align-items: flex-start;
  height: 100%;
`

const ContainerB = styled(Box)`
  flex-direction: column;
  height: 100%;
`

const TitleField = styled(Text)`
  ${titleDynamicStyles};
  width: 100%;
  text-align: start;
  margin-bottom: 10px;
`

const Field = styled(Text)`
  ${fieldDynamicStyles};
  width: 100%;
  text-align: start;
  margin-bottom: 3px;
`

const Container = styled(Box)`
    display: grid;
    width: 100%;
    height: 108px;
    grid-template-columns: 25% 70%;
    grid-column-gap: 12px;
    border-radius: 3px;
    padding: 10px;
`

const Tag = styled(Box)`
  width: 30px;
  height: 6px;
`

class Card extends Component {
  static propTypes = {
    record: PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string,
      fields: PropTypes.arrayOf(PropTypes.object),
      tags: PropTypes.array
    })
  }

  static defaultProps = {
    record: {
      id: '1',
      icon: 'person',
      title: 'Osama Ahmaro',
      fields: [{id: 1, value: 'Front End Developer'}, {id: 2, value: 'Jerusalem, Israel'}, {id: 3, value: 'osama.ahmaro@gmail.com'}],
      tags: [{id: 1, name: 'tag1', color: '#B84243'}, {id: 2, name: 'tag2', color: '#613855'}]
    }
  }

  render() {
    const { icon, title, fields, tags } = this.props.record
    const slicedTags = tags.length <= 4 ? tags : tags.slice(0, 4)
    const slicedFields = fields.length <= 3 ? fields : fields.slice(0, 3)

    return (
      <StyledCard>
        <Container>
          <ContainerA>
            <Icon size={40} icon={icon} />
          </ContainerA>
          <ContainerB>
            <TitleField>{ title }</TitleField>
            { slicedFields.map((field) => (
              <Field key={field.id}>{field.value}</Field>
            ))}
            <Box className={css`margin-top: 6px;`}>
              { slicedTags.map((tag) => (
                <Tag key={tag.id} className={css`background-color: ${tag.color};`} />
              ))}
            </Box>
          </ContainerB>
        </Container>
      </StyledCard>
    )
  }
}

export default Card
