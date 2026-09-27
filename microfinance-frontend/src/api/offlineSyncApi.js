import axiosClient from './axiosClient';

export const offlineSyncApi = {
  syncBatch: (batchData) => axiosClient.post('/offline-sync/batch', batchData),
};
