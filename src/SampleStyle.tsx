import { Box, Button, rem, useMantineTheme } from '@mantine/core';
import classes from './Button.module.css';
import * as veClasses from './SampleStyle.css';

export function SampleCssModule() {
  return <Box className={classes.box}>sample</Box>;
}

export function SampleVanillaExtract() {
  return <Box className={veClasses.box}>sample</Box>;
}

export function SampleStyle() {
  const theme = useMantineTheme();

  return (
    <div>
      {/*
      colorプロップは、特定のコンポーネントに適用される複数のCSSプロパティ（例: background、color、border-colorなど）を一括で制御するために使用
      一方、cプロップは、通常コンポーネント内のテキスト色（CSSのcolorプロパティ）を直接指定するために使用
      */}
      <Button color='yellow' c='black'>
        背景色が黄色で文字が黒のボタン
      </Button>
      <div
        style={{
          backgroundColor: theme.colors.blue[1],
          color: theme.colors.blue[9]
        }}
      >
        This is a blue theme
      </div>

      <Button
        style={{
          // theme.colors.red[5]
          color: 'var(--mantine-color-red-5)',
          fontSize: rem(12)
        }}
      >
        Button 1
      </Button>
    </div>
  );
}
