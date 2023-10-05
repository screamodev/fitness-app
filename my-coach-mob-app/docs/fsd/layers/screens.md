# Screens

Complete application views

## Description

Note: Each page should have **as simple logic as possible**

All the logic of display, business rules and other things-should be implemented by composing the underlying layers (`shared`, `entities`, `features`).

## Structure

```
- {screen-name}/
    - `index.tsx` - screen's component
    - `styles.ts` (optional)
    - `ui.ts` or ui/ (optional) - contains specific components for this screen only
    - `lib.ts` or lib/ (optional) - contains specific hooks/helpers for this screen only
    - `model.ts` or model/ (optional) - contains specific model data for this screen only

# Due to routing specifics, some layer can contain nested structures:
- {screen-group-name}/
    - {screen-name-1}
        - `index.tsx`
        - ...
    - {screen-name-2}
        - ...
```

## Structure example

```
├── screens/
|   ├── home
|   |   ├── index.tsx
|   |   └── styles.ts
|   |
|   ├── auth
|   |   ├── sign-in
|   |   |   ├── index.tsx
|   |   |   └── styles.ts
|   |   └── sign-up
|   |       ├── index.tsx
|   |       └── styles.ts
|   |
|   ├── not-found
|   |   ├── index.tsx
|   |   └── styles.ts
|   └── ...
```

## Screen example

```tsx
// screens/home/index.tsx

import { Statistics } from 'widgets/statistics';
import { Text, Layout } from 'shared/ui';
import { useTranslation } from 'shared/lib';

import { styles } from './styles';

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Text style={styles.title}>{t('home.title')}</Text>
      <Statistics />
    </Layout>
  );
}
```

**Note:** we use default export for screen components because we must not export any other components.
