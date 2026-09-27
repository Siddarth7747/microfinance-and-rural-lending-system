import axiosClient from './axiosClient';

export const repaymentApi = {
  process: (data) => axiosClient.post('/repayments', data),
};
