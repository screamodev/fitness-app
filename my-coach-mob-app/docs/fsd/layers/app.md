# App

Application initialization logic and static assets

## Description

There are usually placed:

- initialization of processes and other background logic;
- initialization of providers, wrappers;
- connecting global application styles.

## Structure

```
- assets/
    - images/
    - fonts/
    - ...
- providers/
    - `with-provider-1.tsx`
    - `with-provider-2.tsx`
    - ...
    - `index.ts` (combine all providers)
- lib/ (lib can contain custom hooks and / or helper functions)
    - `use-custom-hook1.ts`
    - `get-help-fn1.ts`
    - ...
    - `index.ts`
- `ui.tsx` or ui/ (if there is more than one component)
- `index.ts` - app entrypoint
```

## Provider example

```tsx
// app/providers/with-store.tsx

export const withStore = (component: () => ReactNode) => () =>
  <RecoilRoot>{component()}</RecoilRoot>;
```
