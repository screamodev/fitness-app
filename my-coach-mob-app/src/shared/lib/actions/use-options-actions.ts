import { useActionSheet } from '@expo/react-native-action-sheet';

import { Action } from 'shared/config/action';
import { useTheme } from 'shared/lib/theme';

export const useOptionsActions = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const { theme } = useTheme();

  const showActionsSheet = (actions: Action[]) => {
    const options = actions.map(({ title }) => title);

    const cancelButtonIndex = actions.findIndex(({ isCancel }) => isCancel);

    const destructiveButtonIndex = actions.findIndex(({ isDestructive }) => isDestructive);

    const disabledButtonIndices = actions.reduce((indices, { isDisabled }, index) => {
      return isDisabled ? [...indices, index] : indices;
    }, [] as Array<number>);

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        disabledButtonIndices,
        destructiveButtonIndex,
        userInterfaceStyle: theme.color,
      },
      (selectedIndex) => {
        if (selectedIndex !== undefined && selectedIndex < actions.length) {
          const actionCb = actions[selectedIndex].callback;

          actionCb && actionCb();
        }
      },
    );
  };

  return [showActionsSheet];
};
