# Feature-Sliced Design

[app](layers/app.md)

[processes](layers/processes.md) **WIP**

[screens](layers/screens.md)

[widgets](layers/widgets.md) **WIP**

[features](layers/features.md) **WIP**

[entities](layers/entities.md) **WIP**

[shared](layers/shared.md) **WIP**

## Rules:

- Each layer is located only at the topmost level, and cannot occur again at another nesting level.
- Each layer can use (import) only the underlying layers
- Names of files and folders must be in a kebab-case.
- Each component must have a folder:

```
{component-name}/
  - index.tsx
  - styles.ts (optional)
```

## How to use?

First, decompose by main layers relevant to almost any application:

- **app** - for initializing application logic
- **screens** - for application screens
- **shared** - for abstract commonly used logic (UIKIT / helpers / API)

Then, add the remaining layers as needed:

- **widgets** - if the logic on the screens starts to grow and duplicate
- **entities** - if the amount of deunified logic is growing in the project
- **features** - if it becomes difficult to find the boundaries of specific user scenarios in the project, and control them
- **processes** - if a lot of "end-to-end logic" grows over the page
