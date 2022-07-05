import { StyleSheet, FlatList, View, TextInput, ActivityIndicator } from 'react-native'
import { PostCard } from './PostCard'
import { HeaderIcon } from './HeaderIcon'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { COLORS, FONTS, SIZES } from '../styles'
import { useState } from 'react'

export const RenderPost = ({data, openPost, screen, openDrawer, openCreate, loader}) => {
  const [value, setValue] = useState('')

  const empty = !data.length && 
    <View style={styles.empty}>
      <MaterialIcons name="add-photo-alternate" size={90} color={COLORS.white} />
    </View>

  return (
    <FlatList
      data={data.filter(item => item.title.toLowerCase().includes(value.toLowerCase().trim()))}
      renderItem={({item}) => (<PostCard post={item} onOpen={openPost}/>) }
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent= { screen === 'home' && (
        <>
          <View style={styles.header}>
            <HeaderIcon onPressHandler={openDrawer} onOpenCreate={openCreate}/>
            <View style={styles.search}>
              <Ionicons name='ios-search-outline' value={value} size={24} color={COLORS.secondary} style={styles.searchIcon}/>
              <TextInput 
                style={styles.input} 
                placeholder='Search a post'
                autoCapitalize='none' 
                onChangeText={setValue}/>
            </View>
          </View> 
          {loader 
            ? <View style={styles.loader}>
                <ActivityIndicator size='large' color={COLORS.white}/>
              </View> 
            : empty
          }
        </>
        )}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    height: 80,
    marginLeft: 10,
    marginTop: '21%',
    borderRadius: 10,
    marginBottom: 25
  }, 

  search: {
    flexDirection: 'row',
    width: '95%',
    height: 45,
    marginBottom: 20,
    marginTop: 25,
    borderRadius: 20,
  },

  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    top: 9,
    left: 10,
  },

  input: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 40,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular
  },

  loader: {
    marginTop: '50%'
  },

  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%'
  }
})