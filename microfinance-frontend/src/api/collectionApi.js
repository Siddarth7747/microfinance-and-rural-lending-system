import axiosClient from './axiosClient';

export const collectionApi = {
  getSheet: (branchId, date) => axiosClient.get(`/collections/sheet?branchId=${branchId}${date ? `&date=${date}` : ''}`),
};
