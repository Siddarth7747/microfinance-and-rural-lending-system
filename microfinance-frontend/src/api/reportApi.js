import axiosClient from './axiosClient';

export const reportApi = {
  exportPortfolioCsv: () => axiosClient.get('/reports/portfolio/csv', { responseType: 'blob' }),
  getRbiPslReport: () => axiosClient.get('/reports/rbi-psl'),
};
