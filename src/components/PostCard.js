import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES } from '../styles'
import { useDispatch } from 'react-redux'
import { BlurView } from 'expo-blur'
import { IconButton } from '../ui/Buttons'
import { updateInDB } from '../store/postActions'

export const PostCard = ({post, onOpen}) => {
  const dispatch = useDispatch()
  const isBooked = post.booked
  const icon = isBooked ? 'ios-star' : 'ios-star-outline'

  return (
    <View style={styles.card}>
      <BlurView intensity={40} style={styles.blur} >
        <View style={styles.headeCard}>
          <Text style={styles.title}>{post.title}</Text>
          <IconButton 
            name={icon} 
            size={30} 
            color={COLORS.white} 
            {...styles.star} 
            onPressHandler={() => dispatch(updateInDB(post))}/>
        </View>
        <TouchableOpacity style={styles.touch} activeOpacity={0.6} onPress={() => onOpen(post)}>
          <Image source={{uri: post.img}} style={styles.image}/>
          <View style={styles.date}>
            <Text style={styles.datetxt}>{new Date(post.date).toLocaleDateString()}</Text>
          </View>
        </TouchableOpacity>
      </BlurView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  headeCard: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center', 
    bottom: 0
  },

  blur: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 230,
    borderRadius: 20,
    overflow: 'hidden',
    borderLeftColor: 'rgba(255, 255, 255, 0.5)',
    borderLeftWidth: 0.5,
    borderTopColor: 'rgba(255, 255, 255, 0.5)',
    borderTopWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 0.5,
    borderRightColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 0.5,
    marginBottom: 15,
    paddingVertical: 10
  },

  touch: {
    width: '85%',
    height: 165,
    marginBottom: SIZES.extraLarge + 5,
    ...SHADOWS.extraDark
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },

  date: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    width: '100%',
    height: SIZES.large,
    backgroundColor: 'rgba(140, 140, 140, 0.5)',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },

  datetxt: {
    color: '#E3E7E6'
  },

  title: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    paddingBottom: 10,
    paddingTop: SIZES.large,
    color: COLORS.primary
  },

  star: {
    position: 'absolute',
    zIndex: 1,
    right: 20,
    top: 15
  }
})