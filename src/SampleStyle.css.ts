import { rem } from '@mantine/core';
import { style } from '@vanilla-extract/css';
import { vars } from './theme';

export const box = style({
  color: vars.colors.black,
  backgroundColor: vars.colors.red[5],
  fontSize: vars.fontSizes.xl,
  paddingRight: vars.spacing.md,

  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white
    }
  },

  '@media': {
    [vars.smallerThan('md')]: {
      fontSize: rem(50)
    }
  }
});
