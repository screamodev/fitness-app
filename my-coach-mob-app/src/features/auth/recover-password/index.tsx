import { Screen } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { Link } from 'shared/ui/theme';
import { styles } from './styles';

export function RecoverPassword() {
  const { t } = useLanguage();

  return (
    <Link style={styles.link} to={Screen.RecoverPassword}>
      {t('signIn.forgotPasswordLinkText')}
    </Link>
  );
}
