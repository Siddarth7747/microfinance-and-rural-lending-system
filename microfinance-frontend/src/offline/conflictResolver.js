/**
 * Offline conflict resolution rules engine.
 */
export const resolveConflict = (localRecord, serverRecord) => {
  if (!serverRecord) return localRecord;
  if (!localRecord) return serverRecord;

  // Rule 1: Payments recorded locally take precedence if offline timestamp is higher
  if (localRecord.isOfflineEntry && localRecord.timestamp > serverRecord.timestamp) {
    return {
      ...localRecord,
      conflictResolved: true,
      resolutionStrategy: 'LOCAL_OFFLINE_PRECEDENCE'
    };
  }

  // Rule 2: Default last-write-wins
  return localRecord.timestamp > serverRecord.timestamp ? localRecord : serverRecord;
};
