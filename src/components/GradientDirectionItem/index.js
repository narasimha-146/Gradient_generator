import {DirectionButton, ListItem} from './styledComponents'

const GradientDirectionItem = ({
  directionDetails,
  isActive,
  setActiveDirection,
}) => {
  const {value, displayText} = directionDetails

  const onClickDirection = () => {
    setActiveDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
