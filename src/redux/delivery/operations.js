import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const fetchStatus = createAsyncThunk(
  'getStatusDocuments',
  async value => {
    try {
      const res = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
        apiKey: 'd1ecf20c3ae0983132d8dc6825939f1f',
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
          Documents: [
            {
              DocumentNumber: value,
            },
          ],
        },
      });
      return res.data.data[0];
    } catch (error) {
      Notiflix.Notify.failure('Щось пішло не так...');
      return error.message;
    }
  }
);
