import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAddress = createAsyncThunk('getWarehouses', async () => {
  try {
    const res = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
      apiKey: 'd1ecf20c3ae0983132d8dc6825939f1f',
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: 'луцьк',
      },
    });
    return res.data.data;
  } catch (error) {
    return error.message;
  }
});
