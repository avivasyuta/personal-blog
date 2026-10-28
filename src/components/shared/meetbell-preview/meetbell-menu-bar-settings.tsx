import { UiCaption, UiGroup, UiGroupTitle, UiRow, UiSettingsPanel, UiSwitch } from './ui';

export function MeetbellMenuBarSettings() {
  return (
    <UiSettingsPanel>
      <UiGroupTitle>Startup</UiGroupTitle>

      <UiGroup>
        <UiRow label="Launch at Login">
          <UiSwitch isOn />
        </UiRow>
      </UiGroup>

      <UiGroupTitle>Menu Bar</UiGroupTitle>

      <UiGroup>
        <UiRow label="Show next event in menu bar">
          <UiSwitch isOn />
        </UiRow>
      </UiGroup>

      <UiCaption>Shows the next event and time until it starts, e.g. “Standup · 5m”.</UiCaption>
    </UiSettingsPanel>
  );
}
