import { useState } from 'react';
import { FlatList } from 'react-native';

import { Theme } from 'shared/config/theme';
import { useLanguage } from 'shared/lib/localization';
import { useTheme } from 'shared/lib/theme';
import { CheckboxButton } from 'shared/ui/buttons';
import { CardView } from 'shared/ui/card-view';
import { Divider } from 'shared/ui/theme';
import { getThemes } from './config';
import { styles } from './styles';

export const ChangeTheme = () => {
  const { theme, changeTheme } = useTheme();

  const [selectedTheme, setSelectedTheme] = useState<Theme>(theme.control);

  const { t } = useLanguage();

  const themes = getThemes(t);

  const onSelectTheme = async (newTheme: Theme) => {
    await changeTheme(newTheme);
    setSelectedTheme(newTheme);
  };

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={themes}
      keyExtractor={({ key }) => key}
      renderItem={({ item: { name, key } }) => (
        <CheckboxButton
          title={name}
          isSelected={selectedTheme === key}
          onPress={() => onSelectTheme(key)}
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
