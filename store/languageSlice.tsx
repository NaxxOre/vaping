import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: (sessionStorage.getItem('language') || 'EN'),
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    

      changeLanguage: (state) => {
        state.value = (state.value == "EN") ? "မြန်မာ": "EN";
        sessionStorage.setItem('language',state.value);
        window.location. reload();
      }
  },
})

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer