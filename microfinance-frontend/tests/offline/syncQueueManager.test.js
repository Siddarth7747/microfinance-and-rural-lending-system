import { describe, it, expect } from 'vitest';
import { syncQueueManager } from '../../src/offline/syncQueueManager';

describe('syncQueueManager', () => {
  it('has enqueue and processQueue functions', () => {
    expect(typeof syncQueueManager.enqueue).toBe('function');
    expect(typeof syncQueueManager.processQueue).toBe('function');
  });
});
