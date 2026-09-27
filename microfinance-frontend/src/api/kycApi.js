import axiosClient from './axiosClient';

export const kycApi = {
  verify: (data) => axiosClient.post('/kyc/verify', data),
};
