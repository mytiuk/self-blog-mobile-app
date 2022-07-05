import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, SHADOWS, FONTS, SIZES } from '../styles'

export const PhotoPicker = ({ image, takePhoto }) => {

  return (
      <TouchableOpacity style={styles.touch} onPress={() => takePhoto()} >
       { image
        ? <Image source={{uri: image}} style={styles.image} /> 
        : <Text style={styles.photo} >Add photo</Text>
       }
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touch: {
    width: '90%',
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: COLORS.secondary,
    ...SHADOWS.extraDark
  },

  photo: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.medium,
    color: COLORS.secondary
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover'
  }
})