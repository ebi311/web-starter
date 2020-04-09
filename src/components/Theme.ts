import { darken, lighten, rgba } from 'polished';
import baseStyled, { ThemedStyledInterface } from 'styled-components';

const _theme = {
  background: '#fff',
  surface: '#757575',
  foreground: '#424242',
  primary0: '#311b92',
  primary1: '#6746c3',
  primary2: '#000063',
  secondary0: '#fbc02d',
  secondary1: '#fff263',
  secondary2: '#c49000',
  fontSize: 16,
  griSize: 8,
  halfGridSize: 4,
};

const theme = {
  ..._theme,
  surface1: lighten(0.2, _theme.surface),
  surface2: darken(0.2, _theme.surface),
  foreground1: rgba(_theme.foreground, 0.5),
};

export default theme;

export type Theme = typeof theme;

export const styled = baseStyled as ThemedStyledInterface<Theme>;
