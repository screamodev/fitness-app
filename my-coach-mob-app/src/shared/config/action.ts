export type Action = {
  title: string;
  callback?: () => void;
  isCancel?: boolean;
  isDisabled?: boolean;
  isDestructive?: boolean;
};
