import axiosClient from './axiosClient';

export const shgApi = {
  getAll: () => axiosClient.get('/shg'),
  getGrade: (id) => axiosClient.get(`/shg/${id}/grade`),
  recordSavings: (data) => axiosClient.post('/shg-savings', data),
};
