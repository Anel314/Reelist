export const colors = {
  background: "#0F1115",
  surface: "#1A1D24",
  border: "#2B303B",

  text: "#F2F3F5",
  textMuted: "#9AA0AC",
  textOnColor: "#FFFFFF",
  textOnWarning: "#1A1300",

  primary: "#E5484D",
  confirm: "#2FA866",
  warning: "#F5B731",
  danger: "#D6303A",
  info: "#3E8EDE",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radii = {
  sm: 6,
  md: 10,
  lg: 14,
  pill: 999,
} as const;

export const typography = {
  size: { sm: 13, md: 15, lg: 17 },
  weight: { regular: "400", medium: "500", semibold: "600", bold: "700" },
} as const;

export const theme = { colors, spacing, radii, typography };
export type Theme = typeof theme;
