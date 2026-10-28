import { UiGroup, UiGroupTitle, UiRow, UiSettingsPanel, UiSwitch } from './ui';

const calendarGroups = [
  {
    account: 'iCloud',
    calendars: [
      { name: 'Work', color: '#d63ae0', isSelected: true },
      { name: 'Home', color: '#1ea7e0', isSelected: true },
    ],
  },
  {
    account: 'Other',
    calendars: [{ name: 'Birthdays', color: '#8e9bb0', isSelected: false }],
  },
];

export function MeetbellCalendars() {
  return (
    <UiSettingsPanel>
      {calendarGroups.map((group) => (
        <div
          key={group.account}
          className="flex flex-col gap-2"
        >
          <UiGroupTitle>{group.account}</UiGroupTitle>

          <UiGroup>
            {group.calendars.map((calendar) => (
              <UiRow
                key={calendar.name}
                label={
                  <span className="flex items-center gap-2">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ backgroundColor: calendar.color }}
                    />
                    {calendar.name}
                  </span>
                }
              >
                <UiSwitch isOn={calendar.isSelected} />
              </UiRow>
            ))}
          </UiGroup>
        </div>
      ))}
    </UiSettingsPanel>
  );
}
