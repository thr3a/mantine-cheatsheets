import { useMantineTheme } from '@mantine/core';

export function ColorList() {
  const theme = useMantineTheme();

  return (
    <div>
      {Object.entries(theme.colors).map(([colorName, colorValues]) => (
        <div key={colorName}>
          {colorValues.map((colorValue, index) => (
            <div key={index}>
              {colorName}.{index}: {colorValue}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
