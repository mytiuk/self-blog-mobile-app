import { createSlice } from "@reduxjs/toolkit"
import { loadDB, addTotDB, updateInDB, removeFromDB } from "./postActions"

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false
  },

  extraReducers: {
    //----------Load---------------
    [loadDB.pending]: (state) => {
      state.loading = true
    },
    [loadDB.fulfilled]: (state, action) => {
      state.posts = action.payload.reverse()
      state.loading = false
    },
    [loadDB.rejected]: (state) => {
      state.loading = false
    },

    //-------------Add---------------
    [addTotDB.fulfilled]: (state, action) => {
      state.posts.unshift(action.payload)

    },

    //----------Update-----------------
    [updateInDB.fulfilled]: (state, action) => {
      const addbook = state.posts.map(item => {
        if(item.id === action.payload) {
          item.booked = !item.booked
        }
        return item
      })
      state.posts = addbook 
    },

    //----------Remove-----------------
    [removeFromDB.fulfilled]: (state, action) => {
      const removed = state.posts.filter(item => item.id !== action.payload)
      state.posts = removed
    }
  }
})

export const {addPost, removePost, bookPost} = postSlice.actions

export default postSlice.reducer 