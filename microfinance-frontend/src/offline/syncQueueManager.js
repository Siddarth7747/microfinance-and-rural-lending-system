import { saveOfflineRepayment, getOfflineRepayments, clearOfflineRepayments } from './indexedDbClient';
import { repaymentApi } from '../api/repaymentApi';

export const syncQueueManager = {
  /**
   * Enqueue a collection item to IndexedDB queue.
   */
  enqueue: async (item) => {
    const queueItem = {
      ...item,
      id: item.id || Date.now(),
      timestamp: Date.now(),
      status: 'PENDING'
    };
    await saveOfflineRepayment(queueItem);
    return queueItem;
  },

  /**
   * Dequeue and sync all pending items with the backend server.
   */
  processQueue: async () => {
    const pendingItems = await getOfflineRepayments();
    if (!pendingItems || pendingItems.length === 0) return { synced: 0, failed: 0 };

    let synced = 0;
    let failed = 0;

    for (const item of pendingItems) {
      try {
        await repaymentApi.process(item);
        synced++;
      } catch (err) {
        console.error('Failed to sync item:', item, err);
        failed++;
      }
    }

    if (synced > 0 && failed === 0) {
      await clearOfflineRepayments();
    }

    return { synced, failed };
  }
};
