import { useState } from 'react';

import { ExercisesList } from 'features/exercises/exercises-list';
import { SearchExercises } from 'features/exercises/search-exercises';
import { useGetExercises } from 'entities/exercises';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export function FoundExercisesList() {
  const [searchQuery, setSearchQuery] = useState('');

  const { isLoading, exercises } = useGetExercises(searchQuery);

  return (
    <View style={styles.container}>
      <SearchExercises onSearch={setSearchQuery} />
      <ExercisesList isLoading={isLoading} exercises={exercises} />
    </View>
  );
}
