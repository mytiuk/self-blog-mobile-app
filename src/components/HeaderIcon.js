import { StyleSheet, View, Text } from 'react-native'
import { COLORS, FONTS, SIZES } from '../styles'
import { IconButton } from '../ui/Buttons'

export const HeaderIcon = ({ onPressHandler, onOpenCreate}) => {
  return (
    <View style={styles.headerIcon}>
      <IconButton name='menu' size={34} color={COLORS.white} onPressHandler={onPressHandler}/>
      <Text style={styles.headerTxt}>Home</Text>
      <IconButton name='md-camera-outline' size={32} color={COLORS.white} onPressHandler={onOpenCreate}/>
    </View>
  )
}

const styles = StyleSheet.create({
  headerIcon: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 
  
  headerTxt: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white
  }
})