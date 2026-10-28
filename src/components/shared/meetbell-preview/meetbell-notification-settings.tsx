import { LuVolume1 } from 'react-icons/lu';
import { UiCaption, UiGroup, UiGroupTitle, UiPicker, UiRow, UiSettingsPanel } from './ui';

export function MeetbellNotificationSettings() {
  return (
    <UiSettingsPanel>
      <UiGroupTitle>Notification</UiGroupTitle>

      <UiGroup>
        <UiRow label="Sound">
          <span className="flex items-center gap-2">
            <LuVolume1
              size={16}
              className="text-white/60"
            />
            <UiPicker value="Big Ben" />
          </span>
        </UiRow>

        <UiRow label="Notify me">
          <UiPicker value="1 min before" />
        </UiRow>
      </UiGroup>

      <UiCaption>The full-screen alert appears on all displays.</UiCaption>
    </UiSettingsPanel>
  );
}
