import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { COLORS, FONTS, image, SIZES } from '../styles'
import { useSelector } from 'react-redux'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

export const CustomDrawer = (props) => {
  const posts = useSelector(state => state.posts.posts)
  const count = posts.length
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground source={image.drawerbg} style={styles.bgimg}>
          <Image source={image.user} style={styles.user}/>
          <View style={{marginLeft: 15, marginTop: 5}}>
            <Text style={styles.txtUser}>Hello!</Text>
            <View style={{flexDirection: 'row', top: 5, left: 7}}>
              <MaterialCommunityIcons name='tooltip-image' size={20} color={COLORS.white}/>
              <Text style={styles.txtDetail}>{count} posts</Text>
            </View>
           </View>
        </ImageBackground>
        <View style={styles.content}>
          <DrawerItemList {...props}/>
        </View>
      </DrawerContentScrollView>
      <View style={styles.contentBottom}>
       <TouchableOpacity onPress={() => {}} style={styles.bottomButton}>
        <View style={styles.logout}>
          <Ionicons name='share-social-outline' size={26} color='#333'/>
          <Text style={styles.logoutTxt}>Tell a Freand</Text>
        </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {}} style={styles.bottomButton}>
        <View style={styles.logout}>
          <Ionicons name='log-out-outline' size={26} color='#333'/>
          <Text style={styles.logoutTxt}>Log out</Text>
        </View>
       </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bgimg: {
    padding: 20,
  },

  user: {
    width: 70,
    height: 70,
  },

  txtUser: {
    color: COLORS.white,
    fontSize: SIZES.large,
    fontFamily: FONTS.medium,
  },

  txtDetail: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    marginLeft: 5
  },

  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 10
  },

  contentBottom: {
    padding: 20,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    marginBottom: 15
  },

  bottomButton: {
    paddingVertical: 8
  },

  logout: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  logoutTxt: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium ,
    left: 10
  }
})