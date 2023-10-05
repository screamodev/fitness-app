import { useBoxShadow } from 'shared/lib/styles';
import { Button, ButtonProps } from 'shared/ui/theme';
import { styles } from './styles';

type PrimaryButtonProps = ButtonProps & {
  textColor?: string;
  backgroundColor?: string;
};

export function PrimaryButton(props: PrimaryButtonProps) {
  const { textColor, backgroundColor, buttonStyle, containerStyle, ...otherProps } = props;

  const shadowStyles = useBoxShadow();

  return (
    <Button
      lightTextColor={textColor}
      darkTextColor={textColor}
      lightColor={backgroundColor}
      darkColor={backgroundColor}
      titleStyle={styles.buttonText}
      buttonStyle={[styles.button, shadowStyles, buttonStyle]}
      containerStyle={[styles.buttonContainer, containerStyle]}
      radius={8}
      {...otherProps}
    />
  );
}
