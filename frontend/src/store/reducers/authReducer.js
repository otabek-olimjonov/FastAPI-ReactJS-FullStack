import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: Boolean(localStorage.getItem('token')),
  profile: {
    name: '',
    id_admin: ''
  },
  roles: []
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, { payload }) => {
      state.authenticated = payload;
    },
    setProfile: (state, { payload }) => {
      state.profile = payload;
    },
    setRoles: (state, { payload }) => {
      state.roles = payload;
    }
  }
});

export const { setAuthenticated, setProfile, setRoles } = authSlice.actions;
export default authSlice.reducer;
