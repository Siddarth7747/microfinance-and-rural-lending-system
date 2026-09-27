import axiosClient from './axiosClient';

export const insuranceApi = {
  fileClaim: (data) => axiosClient.post('/insurance-claims', data),
  getByLoan: (loanId) => axiosClient.get(`/insurance-claims/loan/${loanId}`),
};
