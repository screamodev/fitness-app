import { useCachedResources } from './lib';
import AppUI from './ui';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return <AppUI />;
}
