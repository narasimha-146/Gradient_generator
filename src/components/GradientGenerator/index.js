import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  Heading,
  SubHeading,
  DirectionsList,
  ColorPickerContainer,
  ColorItem,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  setActiveDirection = value => {
    this.setState({activeDirection: value})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onGenerate = () => {
    const {activeDirection, color1, color2} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${color1}, ${color2}`,
    })
  }

  render() {
    const {activeDirection, color1, color2, gradientValue} = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>

        <SubHeading>Choose Direction</SubHeading>
        <DirectionsList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionDetails={each}
              isActive={activeDirection === each.value}
              setActiveDirection={this.setActiveDirection}
            />
          ))}
        </DirectionsList>

        <SubHeading>Pick the Colors</SubHeading>
        <ColorPickerContainer>
          <ColorItem>
            <p>{color1}</p>
            <ColorInput
              type="color"
              value={color1}
              onChange={this.onChangeColor1}
            />
          </ColorItem>
          <ColorItem>
            <p>{color2}</p>
            <ColorInput
              type="color"
              value={color2}
              onChange={this.onChangeColor2}
            />
          </ColorItem>
        </ColorPickerContainer>

        <GenerateButton type="button" onClick={this.onGenerate}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
