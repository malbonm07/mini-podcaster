import { createAsyncThunk } from '@reduxjs/toolkit';
import {getPodcasts} from '../../services'

export const fetchAllPodcasts = createAsyncThunk(
  'podcasts/fetchAllPodcasts',
  async () => {
    const {data} = await getPodcasts();
    return data
  },
);