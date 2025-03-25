import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = createAsyncThunk(
  "tasks/fetchWeather",
  async (city) => {
    const response = await axios.get(`${WEATHER_API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: { list: [], weather: null, loading: false },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
