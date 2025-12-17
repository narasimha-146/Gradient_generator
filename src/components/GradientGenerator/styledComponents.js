import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
`

export const Heading = styled.h1`
  color: #ededed;
  font-size: 28px;
  text-align: center;
`

export const SubHeading = styled.p`
  color: #ffffff79;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
`

export const DirectionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 0;
  list-style-type: none;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`

export const ColorItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`

export const ColorInput = styled.input`
  margin-top: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30px;
`
