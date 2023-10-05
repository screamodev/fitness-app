import { AppLayout } from 'widgets/layout';
import { SettingsPanel } from 'widgets/settings-panel';

export default function SettingsScreen() {
  return (
    <AppLayout withTopInset={false}>
      <SettingsPanel />
    </AppLayout>
  );
}
