// IndexedDB client for offline storage of field collection entries
const DB_NAME = 'mfi_offline_db';
const DB_VERSION = 1;

export const openDb = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('repayments')) {
        db.createObjectStore('repayments', { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const saveOfflineRepayment = async (repayment) => {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('repayments', 'readwrite');
    tx.objectStore('repayments').add(repayment);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  });
};
