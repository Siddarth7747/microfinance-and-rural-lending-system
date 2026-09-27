import axiosClient from './axiosClient';

export const loanApplicationApi = {
  apply: (data) => axiosClient.post('/loan-applications', data),
  recommend: (id, officerName, remarks) => axiosClient.put(`/loan-applications/${id}/recommend`, { officerName, remarks }),
  approveBm: (id, managerName, remarks) => axiosClient.put(`/loan-applications/${id}/approve-bm`, { managerName, remarks }),
  approveCredit: (id, approverName, remarks) => axiosClient.put(`/loan-applications/${id}/approve-credit`, { approverName, remarks }),
  reject: (id, reason) => axiosClient.put(`/loan-applications/${id}/reject`, { reason }),
};
