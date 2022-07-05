import { createAsyncThunk } from "@reduxjs/toolkit"
import * as FileSystem from 'expo-file-system'
import { DB } from "../db"

export const loadDB = createAsyncThunk('posts/loadDB',
  async() => {
    try {
      const posts = await DB.getPosts()
      return posts
    } catch (error) {
      console.log(error)
    }
  }
)

export const addTotDB = createAsyncThunk('posts/addTotDB',
  async(post) => {
    try {
      const fileName = post.img.split('/').pop()
      const newPath = FileSystem.documentDirectory + fileName
      await FileSystem.moveAsync({
          to: newPath,
          from: post.img
       })
      const payload = {...post, img: newPath}
      const id = await DB.createPost(payload)
      payload.id = id

      return payload

    } catch (error) { 
      console.log(error)
    }
  }
)

export const updateInDB = createAsyncThunk('posts/updateInDB',
  async(post) => {
    try {
      await DB.updatePost(post)
      return post.id
    } catch (error) {
      console.log(error)
    }
  }
)

export const removeFromDB = createAsyncThunk('posts/removeFromDB',
  async(id) => {
    try {
      await DB.removePost(id)
      return id
    } catch (error) {
      console.log(error)
    }
  }
)