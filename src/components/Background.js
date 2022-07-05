import { LinearGradient } from 'expo-linear-gradient'

export const Background = ({children, style, color}) => {
  return (
    <LinearGradient 
    style={style}
    colors={color}
    start={{x: 0.5, y: 0}}
    end={{x: 1, y: 0.5}}
  >
    {children}
  </LinearGradient>
  )
}
