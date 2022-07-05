import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import { BlurView } from 'expo-blur'
import { Background } from '../components/Background'
import { SIZES, FONTS, COLORS, SHADOWS } from '../styles'
import { useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { IconButton } from '../ui/Buttons'
import { useSelector } from 'react-redux'
import { updateInDB, removeFromDB } from '../store/postActions'

export const PostScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const postId = route.params.postId
  const posts = useSelector(state => state.posts.posts)
  const post = posts.find(item => item.id === postId)
  
  const deletePostHandler = () => {
    Alert.alert('Delete post?', '',
    [ 
      {text: 'Cencel', style: 'cencel'},
      {text: 'Delete', style: 'destructive', onPress() {
        navigation.navigate('Main')
        dispatch(removeFromDB(postId))
       }
      }
    ])
  }
 
  return (
    <Background style={styles.post} color={['#12c2e9', '#f64f59', '#c471ed']}>
      { post 
          ? <>
             <View style={styles.header}>
                <IconButton  name='arrow-undo-outline' size={32} color={COLORS.white} onPressHandler={() => navigation.goBack()}/>
                <Text style={styles.headerText}>Post {new Date(post.date).toLocaleDateString()}</Text>
                <IconButton name={post.booked ? 'ios-star' : 'ios-star-outline'} size={32} color={COLORS.white} onPressHandler={() => dispatch(updateInDB(post))}/>
              </View>
              <BlurView intensity={40} style={styles.blur}>
                <Text style={styles.title}>{post.title}</Text>
                <View style={styles.touch}>
                  <Image source={{uri: post.img}} style={styles.image}/>
                </View>
                <View style={styles.textContainer}> 
                  <Text style={styles.text}> 
                    {post.text}
                  </Text>
                </View>
                <TouchableOpacity style={styles.delete} onPress={deletePostHandler}>
                  <Ionicons name="trash-sharp" size={30} color={COLORS.white} />
                </TouchableOpacity>
              </BlurView>
           </>
          : null
      }
    </Background> 
  )
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    position: 'absolute',
    top: '7%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 15
  },

  headerText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white
  },

  blur: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '92%',
    borderRadius: 20,
    overflow: 'hidden',
    borderLeftColor: 'rgba(255, 255, 255, 0.5)',
    borderLeftWidth: 0.5,
    borderTopColor: 'rgba(255, 255, 255, 0.5)',
    borderTopWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 0.5,
    borderRightColor: 'rgba(0, 0, 0, 0.2)',
    borderRightWidth: 0.5,
    zIndex: 1,
  },

  title: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    paddingBottom: 15,
    paddingTop: SIZES.large,
    color: COLORS.primary 
  },

  touch: {
    width: '90%',
    height: 280,
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

  textContainer: {
    width: '90%',
    margin: 20,
    paddingHorizontal: 20
  },

  text: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONTS.medium
  },

  delete: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45, 
    height: 45,
    backgroundColor: COLORS.red,
    marginBottom: SIZES.extraLarge,
    marginTop: 15,
    borderRadius: 50,
    ...SHADOWS.dark
  }
})