import axiosClient from './axiosClient';

export const branchApi = {
  getAll: () => axiosClient.get('/branches'),
  getById: (id) => axiosClient.get(`/branches/${id}`),
  create: (data) => axiosClient.post('/branches', data),
};
