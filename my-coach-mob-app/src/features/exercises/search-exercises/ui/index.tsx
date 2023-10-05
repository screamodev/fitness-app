import { useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

import { Time } from 'shared/config/search';
import { useLanguage } from 'shared/lib/localization';
import { Input } from 'shared/ui/form';
import { MagnifyIcon } from 'shared/ui/icons';
import { styles } from './styles';

type SearchExercisesProps = {
  onSearch: (searchQuery: string) => void;
};

export function SearchExercises(props: SearchExercisesProps) {
  const { onSearch } = props;

  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearch = useMemo(() => debounce(onSearch, Time.delay.short), []);

  const { t } = useLanguage();

  const handleSetSearchValue = (searchValue: string) => {
    setSearchQuery(searchValue);

    debouncedSearch(searchValue.trim());
  };

  return (
    <Input
      beforeIcon={MagnifyIcon}
      iconSize={24}
      inputContainerWrapperStyles={styles.container}
      placeholder={t('placeholders.exercises.search')}
      fieldValue={searchQuery}
      onChangeText={handleSetSearchValue}
    />
  );
}
