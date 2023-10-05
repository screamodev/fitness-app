import { useState } from 'react';
import { FlatList } from 'react-native';

import { Language } from 'shared/config/language';
import { useLanguage } from 'shared/lib/localization';
import { CheckboxButton } from 'shared/ui/buttons';
import { CardView } from 'shared/ui/card-view';
import { Divider } from 'shared/ui/theme';
import { getLanguages } from './config';
import { styles } from './styles';

export const ChangeLanguage = () => {
  const { language, changeLanguage, t } = useLanguage();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(language);

  const languages = getLanguages(t);

  const onSelectLanguage = async (selectLanguage: Language) => {
    await changeLanguage(selectLanguage);
    setSelectedLanguage(selectLanguage);
  };

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={languages}
      keyExtractor={({ key }) => key}
      renderItem={({ item: { name, key } }) => (
        <CheckboxButton
          title={name}
          isSelected={selectedLanguage === key}
          onPress={() => onSelectLanguage(key)}
        />
      )}
      ItemSeparatorComponent={() => (
        <CardView>
          <Divider style={styles.divider} />
        </CardView>
      )}
      scrollEnabled={true}
    />
  );
};
