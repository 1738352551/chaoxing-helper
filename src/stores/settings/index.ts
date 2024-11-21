
import { createSlice } from "@reduxjs/toolkit";

interface SettingsState {
  theme: string;
}

// 初始状态
const initialState: SettingsState = {
  theme: "light",
};

export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme, toggleTheme } = settingSlice.actions;
// 选择器等其他代码可以使用导入的 `RootState` 类型
// export const selectCount = (state: RootState) => state.counter.value

export default settingSlice.reducer;
