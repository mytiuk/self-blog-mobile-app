import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { IconButton } from '../ui/Buttons'
import { FONTS, SIZES, COLORS, SHADOWS } from '../styles'
import { Background } from '../components/Background'
import Animated, { useSharedValue, 
       useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated'
import { useEffect } from 'react'

export const AboutScreen = ({navigation}) => {
  const progress = useSharedValue(1)
  const scale = useSharedValue(1)
  const rotate = useSharedValue(-360)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {scale: scale.value}, 
        {rotate: `${rotate.value}deg` }],
      borderRadius: (progress.value * 50),
      
    }
  }, [])

  useEffect(() => {
    progress.value = withTiming(0.5, {duration: 1000}),
    rotate.value = withRepeat(withTiming(360, {duration: 30000}), -1, true),
    scale.value = withTiming(2, {duration: 1000})
  }, []) 

  return (
    <Background style={styles.background} color={['#2F80ED', '#56CCF2']}>
      <StatusBar style='light'/>
      <View style={styles.header}>
        <IconButton  name='menu' size={32} color={COLORS.white} onPressHandler={() => navigation.openDrawer()}/>
        <Text style={styles.headerText}>About</Text>
        <IconButton name='information-circle-outline' size={32} color={COLORS.white}/>
      </View>
      <View style={styles.box}>
        <Text style={styles.creator}> <Text style={{color: '#333',  fontFamily: FONTS.regular}}>Created by</Text> Nick Mytiuk</Text>
      </View>
      <Animated.View style={[styles.circle, animatedStyle]}/>
    </Background> 
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  header: {
    position: 'absolute',
    top: '7%',
    width: '100%',
    flexDirection: 'row',
     justifyContent: 'space-between', 
     alignItems: 'center',
     paddingHorizontal: 15,
     zIndex: 1
  },

  headerText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white
  },

  box: {
   width: 200,
   height: 200,
   position: 'absolute',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: COLORS.blue,
   zIndex: 1,
   borderRadius: 100,
   ...SHADOWS.dark
  },

  circle: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.41,
    shadowRadius: 4.62,
    elevation: 14,
  },

  creator: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
    color: COLORS.primary
  }
})