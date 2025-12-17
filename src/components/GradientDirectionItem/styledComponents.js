import styled from 'styled-components'

export const ListItem = styled.li``

export const DirectionButton = styled.button`
  background-color: #ffffff79;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  color: #334155;
  font-weight: 500;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
