import axiosClient from './axiosClient';

export const loanGroupApi = {
  create: (data) => axiosClient.post('/loan-groups', data),
  getByBranch: (branchId) => axiosClient.get(`/loan-groups/branch/${branchId}`),
  completeGrt: (id, remarks) => axiosClient.post(`/loan-groups/${id}/grt`, { remarks }),
};
