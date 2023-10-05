export enum NotificationType {
  success = 'success',
  warning = 'warning',
  info = 'info',
  error = 'error',
}

export interface Notification {
  id?: string;
  type: NotificationType;
  title: string;
  message: string;
}
