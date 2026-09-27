import axiosClient from './axiosClient';

export const loanApi = {
  getById: (id) => axiosClient.get(`/loans/${id}`),
  getByBorrower: (borrowerId) => axiosClient.get(`/loans/borrower/${borrowerId}`),
  getForeclosureQuote: (id) => axiosClient.get(`/loans/${id}/foreclosure-quote`),
  foreclose: (id) => axiosClient.post(`/loans/${id}/foreclose`),
};
