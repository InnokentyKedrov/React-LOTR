import { createAsyncThunk } from '@reduxjs/toolkit';
import { InitialStateType } from '../types/types';
import { ApiResponse } from '../types/types';

const BASE_URL = 'https://the-one-api.dev/v2/';

export const fetchCharacters = createAsyncThunk<
  ApiResponse,
  InitialStateType,
  { rejectValue: string }
>('state/fetchCharacters', async function (state, { rejectWithValue }) {
  let temp;
  if (state.search === '') {
    temp = `${BASE_URL}character?limit=${state.limit}&page=${state.currentPage}&sort=${state.sort}:asc`;
  } else {
    temp = `${BASE_URL}character?name=/${state.search}/i&limit=${state.limit}&page=${state.currentPage}&sort=${state.sort}:asc`;
  }

  const response = await fetch(temp, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${'Z4doBBY58pqw01ulhGPb'}`,
    },
  });

  if (!response.ok) {
    return rejectWithValue('Server error!');
  }

  return await response.json();
});
