import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const REPOS_SLICE_NAME = "repos";

export const searchRepositories = createAsyncThunk(
  `${REPOS_SLICE_NAME}/getUserInformation`,
  async (keyWord: string, { rejectWithValue }) => {
    try {
      const { data }: any = await axios.get(
        `https://registry.npmjs.org/-/v1/search?text=${keyWord}`
      );
      const names = data.objects.map((object: any) => object.package.name);
      console.log("names: ", names);
      return names;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const repositoriesSlice = createSlice({
  name: REPOS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchRepositories.pending, (state: RepositoriesState) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    });
    builder.addCase(
      searchRepositories.fulfilled,
      (state: RepositoriesState, { payload = [] }) => {
        state.loading = false;
        state.error = null;
        state.data = payload;
      }
    );
    builder.addCase(
      searchRepositories.rejected,
      (state: RepositoriesState, { payload = "" }) => {
        state.loading = false;
        state.error = payload as string;
        state.data = [];
      }
    );
  },
});

export const dataSelector = (state: RootState) => state.repos.data;
export const loadingSelector = (state: RootState) => state.repos.loading;
export const errorSelector = (state: RootState) => state.repos.error;
