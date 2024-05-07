import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  info: null,
  success: null,
  onOk: null,
  lang: localStorage.getItem('i18nextLng')?.toLowerCase() || 'ko',
  rerender: false,
  confirmPopup: {
    action: null,
    open: false,
    type: null,
    msg: null
  }
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setInfo: (state, { payload }) => {
      state.info = payload;
    },
    setSuccess: (state, { payload }) => {
      state.success = payload;
    },
    setOnOk: (state, { payload }) => {
      state.onOk = payload;
    },
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
    setRerender: (state, { payload }) => {
      state.rerender = payload;
    },
    onOpenConfirm: (state, { payload }) => {
      const { open, type, action, msg } = payload;
      state.confirmPopup.open = open || false;
      state.confirmPopup.type = type || null;
      state.confirmPopup.action = action || null;
      state.confirmPopup.msg = msg || null;
    }
  }
});

export const {
  setLoading,
  setError,
  setInfo,
  setSuccess,
  setOnOk,
  setLang,
  setRerender,
  onOpenConfirm
} = appSlice.actions;

export default appSlice.reducer;
