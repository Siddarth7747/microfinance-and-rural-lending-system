import axiosClient from './axiosClient';

export const disbursementApi = {
  initiate: (data) => axiosClient.post('/disbursements', data),
};
