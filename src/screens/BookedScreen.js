import { StyleSheet, View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { COLORS } from '../styles/index'
import { useSelector } from 'react-redux'
import { RenderPost } from '../components/RenderPost'
import { Background } from '../components/Background'
import { IconButton } from '../ui/Buttons'
import { FONTS, SIZES } from '../styles/index'

export const BookedScreen = ({ navigation, route }) => {
  const posts = useSelector(state => state.posts.posts)

  const openPostHandler = post => {
    navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
  }

  return (
    <Background style={styles.background} color={['#00F260', '#0575E6']}>
      <StatusBar style='light'/>
      <View style={styles.header}>
        <IconButton  name='menu' size={32} color={COLORS.white} onPressHandler={() => navigation.openDrawer()}/>
        <Text style={styles.headerText}>Booked</Text>
        <IconButton name='bookmarks-outline' size={30} color={COLORS.white}/>
      </View>
      <View style={styles.box}>
        <RenderPost data={posts.filter(item => item.booked)} openPost={openPostHandler} />
      </View>
    </Background> 
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
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

  box: {
    flex: 1,
    zIndex: 1,
    marginTop: 120
  }
})