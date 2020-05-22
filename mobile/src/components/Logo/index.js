import React from 'react'
import { Svg, Rect, Circle, G, Path } from 'react-native-svg'
import { statusBarHeight } from 'expo-constants'
import { Container } from './styles'

const Logo = () => {
  return (
    <Container styles={{marginTop: statusBarHeight}}>
      <Svg width="73.1" height="73.1" viewBox="0 0 73.1 73.1">
        <Rect fill="#7b1fa2" width="73.1" height="73.1" rx="19"/>
        <Circle fill="#fff" cx="36.43" cy="36.36" r="17.44"/>
        <G fill="#7b1fa2">
          <Path d="M29.49,39.5v0c0-2.12,1.25-3.42,3.15-4.2a4.19,4.19,0,0,1-2.55-3.8V31.4c0-2.87,2.87-4.9,7-4.9s7,2,7,4.9v.05a4.19,4.19,0,0,1-2.55,3.8c1.78.73,3.15,2,3.15,4.2v0c0,3-3.1,5.15-7.62,5.15S29.49,42.52,29.49,39.5Zm9.65-.65V38.8a1.81,1.81,0,0,0-2-1.7,1.81,1.81,0,0,0-2,1.7v.05a1.81,1.81,0,0,0,2,1.75A1.84,1.84,0,0,0,39.14,38.85Zm-.2-6.67v0a1.83,1.83,0,0,0-3.65,0v0a1.83,1.83,0,0,0,3.65,0Z"/>
        </G>
      </Svg>
    </Container>
  )
}

export default Logo
