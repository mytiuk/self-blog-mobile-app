import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const IconButton = ({ name, onPressHandler, size, color, ...props }) => {
  return ( 
    <TouchableOpacity style={{...props}} onPress={onPressHandler}>
     <Ionicons name={name} size={size} color={color}/>
    </TouchableOpacity>
  )
}
