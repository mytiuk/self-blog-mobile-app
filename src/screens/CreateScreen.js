import { StyleSheet, Text, View, TouchableOpacity, TextInput,
         Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { IconButton } from '../ui/Buttons'
import { FONTS, SIZES, COLORS, SHADOWS } from '../styles'
import { BlurView } from 'expo-blur'
import { Background } from '../components/Background'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { PhotoPicker } from '../components/PhotoPicker'
import { addTotDB } from '../store/postActions'
import * as ImagePicker from 'expo-image-picker'

export const CreateScreen = ({navigation}) => {
  const [status, requestPermission] = ImagePicker.useCameraPermissions()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)
  const dispatch = useDispatch()

  const post = { 
    title: title,
    text: text,
    date: new Date().toJSON(),
    booked: false,
    img: img,
 }

  const addPostHandler = () => {
    if(title.trim()) {
      Alert.alert('Add post?', '', 
        [
          {text: 'Cencel', style: 'cencel', onPress() {
            setTitle('')
            setText('')
            setImg(null)
          }},
          {text: 'OK', onPress() {  
              navigation.navigate('Home') 
              dispatch(addTotDB(post))
              setTitle('')
              setText('')
              setImg(null)
            } 
          }
        ]
      )
    } else {
      Alert.alert("Title can't be empty")
    }
  }

  const takePhotoHandler = () => {
    const camera = async() => {
      requestPermission()
      if(!status.granted) return 
      const img = await ImagePicker.launchCameraAsync({
        quality: 0.7,
        allowsEditing: true,
        aspect: [16, 9]
      })
      setImg(img.uri)
    }

    const file = async() => {
      let img = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
      });
      setImg(img.uri)
    }

    Alert.alert('Choose...', '',
      [
        {text: 'Take photo', onPress: () => camera()},
        {text: 'Choose from photos', onPress: () => file()},
        {text: 'Cencel', style: 'cancel'}
      ]
    )
  }
 
  return (
    <Background style={styles.background} color={['#8360c3', '#2ebf91']}>
      <StatusBar style='light'/>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
        <View style={styles.layout}> 
          <View style={styles.header}>
            <IconButton  name='menu' size={32} color={COLORS.white} onPressHandler={() =>  navigation.openDrawer()}/>
            <Text style={styles.headerText}>Create</Text>
            <IconButton name='create-outline' size={32} color={COLORS.white}/>
          </View>
          <BlurView intensity={40} style={styles.blur}>
            <TextInput 
              placeholder='Write a title...'
              style={styles.inputTitle} 
              value={title} 
              maxLength={20}
              autoFocus={false}
              onChangeText={(value) => setTitle(value)}
            />
            <PhotoPicker image={img} takePhoto={takePhotoHandler}/>
            <View style={styles.textContainer}> 
              <TextInput 
                placeholder='Write a text...'
                style={styles.inputText} 
                value={text} 
                maxLength={200}
                autoFocus={false}
                multiline={true}
                onChangeText={(value) => setText(value)}
              />
            </View>
            <TouchableOpacity style={styles.add} onPress={() => addPostHandler()} disabled={!title || !img}>
              <Ionicons name="ios-add" size={35} color={COLORS.white} />
            </TouchableOpacity>
          </BlurView>
        </View>
      </TouchableWithoutFeedback>
    </Background> 
  
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  layout: {
    width: '100%',
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 1,
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
    width: '90%',
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

  inputTitle: {
    width: '85%',
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.secondary,
    fontSize: SIZES.medium + 2,
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    borderStyle: 'dotted',
    marginVertical: 20,
    paddingHorizontal: 20
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputText: {
    width: '85%',
    height: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.secondary,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderStyle: 'dotted',
  },

  add: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, 
    height: 50,
    backgroundColor: '#1DA5FA',
    marginBottom: SIZES.extraLarge,
    borderRadius: 50,
    ...SHADOWS.dark,
    paddingHorizontal: 9
  }
})