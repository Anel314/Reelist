import { isDark } from "@/data/userData";

export const colors = {
  background: isDark ? "#0F1115" : "#F2F3F5",
  surface: isDark ? "#1A1D24" : "#FFFFFF",
  border: isDark ? "#2B303B" : "#D9DCE3",

  text: isDark ? "#F2F3F5" : "#14161A",
  textMuted: isDark ? "#9AA0AC" : "#5F6673",
  textOnColor: "#FFFFFF",
  textOnWarning: "#1A1300",

  primary: "#f3b200",
  confirm: "#4c9c00",
  warning: "#f76300",
  danger: "#FF0000",
  secondary: "#09acb8",
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
