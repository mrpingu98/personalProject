import { TypographyStyleOptions, Variant } from '@mui/material/styles/createTypography';

export const typographyOverrides: Partial<Record<Variant, TypographyStyleOptions>> = {
  h1: {
    fontSize: 55,
    fontWeight: 500,
    color: "#656565",
    fontFamily: 'Arial',
  },
  h2: {
    fontSize: 40,
    fontWeight: 500,
    color: "#656565",
    fontFamily: 'Arial',
  },
  body2: {
    fontSize: 18,
    lineHeight: 1.2,
    color: "#656565",
    fontFamily: 'Arial',
  },
};