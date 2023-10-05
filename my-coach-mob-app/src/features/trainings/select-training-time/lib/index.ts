import { useThemeColor } from 'shared/lib/theme';
import { styles } from '../ui/styles';

export const getButtonStyles = (isActive = false) => {
  const backgroundButtonColor = useThemeColor({}, 'backgroundSecondary');
  const borderButtonColor = useThemeColor({}, 'button');

  const buttonStyles = [
    styles.button,
    {
      backgroundColor: backgroundButtonColor,
      borderColor: borderButtonColor,
    },
  ];

  if (!isActive) {
    return buttonStyles;
  }

  return [
    ...buttonStyles,
    {
      borderWidth: 1,
    },
  ];
};
