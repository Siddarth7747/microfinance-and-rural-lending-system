// Global Gold Toast / Alert Notification Dispatcher

class GoldNotificationEmitter {
  constructor() {
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  notify(notification) {
    this.listeners.forEach((listener) => listener(notification));
  }

  success(title, message = '', details = null) {
    this.notify({
      id: Date.now() + Math.random(),
      type: 'success',
      title: title || 'Operation Completed',
      message,
      details,
      duration: 4500
    });
  }

  error(title, message = '') {
    this.notify({
      id: Date.now() + Math.random(),
      type: 'error',
      title: title || 'Error Occurred',
      message,
      duration: 5000
    });
  }

  celebrate(title, message = '', badge = 'OFFICIAL ACTION') {
    this.notify({
      id: Date.now() + Math.random(),
      type: 'celebrate',
      title,
      message,
      badge,
      duration: 5500
    });
  }
}

export const goldNotify = new GoldNotificationEmitter();
export default goldNotify;
