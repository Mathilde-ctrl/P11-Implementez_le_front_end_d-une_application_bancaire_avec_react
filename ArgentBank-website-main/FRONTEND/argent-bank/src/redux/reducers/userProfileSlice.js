/**
import { createSlice } from '@reduxjs/toolkit';

const userProfileInitialState = {
  userProfile:[],
 
}

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: userProfileInitialState,
  reducers: {
    setProfileData: (state, action) => {
      const { userProfile } = action.payload;
      state.userProfile = userProfile
      
    },
  },
  
  extraReducers:{
    [.pending] :(state) => {
      state.isLoading = true
    },
    [.fulfilled] :(state, action) => {
      console.log("action : ", action);
      state.isLoading = false;
      state.userProfile = action.payload;
    },
    [.rejected] :(state) => {
      state.isLoading = false;
    }
  }
   
});

console.log('userProfileSlice :', userProfileSlice)


export const { setProfileData } = userProfileSlice.actions;
export const userProfileReducer =  userProfileSlice.reducer;

*/