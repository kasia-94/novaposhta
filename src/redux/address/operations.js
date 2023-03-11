import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const fetchAddress = createAsyncThunk('getWarehouses', async value => {
  try {
    const res = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
      apiKey: 'd1ecf20c3ae0983132d8dc6825939f1f',
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: value,
      },
    });
    return res.data.data;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так...');
    return error.message;
  }
});
