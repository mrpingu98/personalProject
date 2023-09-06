import { TypographyClassKey } from '@mui/material';
import { CSSProperties } from '@mui/styles';

export const typographyOverrides: Partial<Record<TypographyClassKey, CSSProperties>> = {
  h1: {
    fontSize: 55,
    fontWeight: 500,
    color: "#453939"
  },
  h2: {
    fontSize: 40,
    fontWeight: 500,
    color: "#453939",
  },
  body2: {
    fontSize: 18,
    lineHeight: 1.2,
    color: "#453939",
    fontFamily: 'Arial',
  },
  root: {
    fontFamily: 'Arial',
  },
};
