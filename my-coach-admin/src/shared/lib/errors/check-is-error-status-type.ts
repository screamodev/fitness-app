import type { ErrorStatus } from '@/shared/config/errors';

export const checkIsErrorStatusType = (error: unknown): error is ErrorStatus =>
  typeof error === 'object' && error !== null && 'statusCode' in error;
