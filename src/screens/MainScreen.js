import { View} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { RenderPost } from '../components/RenderPost'
import { Background } from '../components/Background'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadDB } from '../store/postActions'
  
export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const {posts, loading} = useSelector(state => state.posts)
  const openPostHandler = (post) => navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
 
  useEffect(() => {
    dispatch(loadDB())
  }, [dispatch])
 
  return (
      <Background style={{flex: 1}} color={['#fc00ff', '#00dbde']}>
        <StatusBar style='light'/>
        <View style={{flex: 1, zIndex: 1 }}>
          <RenderPost 
            data={posts} 
            loader={loading}
            openPost={openPostHandler} 
            screen='home' 
            openDrawer={() => navigation.toggleDrawer()} 
            openCreate={() => navigation.jumpTo('Create')}
          />
        </View>
      </Background>
  )
}

