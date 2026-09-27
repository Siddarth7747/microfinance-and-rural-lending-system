import axiosClient from './axiosClient';

export const delinquencyApi = {
  getParReport: (branchId) => axiosClient.get(`/delinquency/par-report${branchId ? `?branchId=${branchId}` : ''}`),
  recalculate: () => axiosClient.post('/delinquency/recalculate'),
  restructure: (id, data) => axiosClient.post(`/delinquency/loans/${id}/restructure`, data),
  writeOff: (id, reason) => axiosClient.post(`/delinquency/loans/${id}/write-off`, { reason }),
};
