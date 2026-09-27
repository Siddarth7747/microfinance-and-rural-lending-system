import axiosClient from './axiosClient';

export const borrowerApi = {
  register: (data) => axiosClient.post('/borrowers', data),
  getById: (id) => axiosClient.get(`/borrowers/${id}`),
  search: (query, page = 0, size = 10) => axiosClient.get(`/borrowers/search?query=${query}&page=${page}&size=${size}`),
  update: (id, data) => axiosClient.put(`/borrowers/${id}`, data),
};
