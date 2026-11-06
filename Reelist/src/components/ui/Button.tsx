import React from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { colors, radii, spacing, typography } from "@/styles/Themes";

export type ButtonVariant =
  | "primary"
  | "confirm"
  | "warning"
  | "danger"
  | "secondary"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

type VariantStyle = {
  background: string;
  pressedBackground: string;
  text: string;
  border?: string;
};

const VARIANTS: Record<ButtonVariant, VariantStyle> = {
  primary: {
    background: colors.primary,
    pressedBackground: "#C93A3F",
    text: colors.textOnColor,
  },
  confirm: {
    background: colors.confirm,
    pressedBackground: "#268F56",
    text: colors.textOnColor,
  },
  warning: {
    background: colors.warning,
    pressedBackground: "#DDA21F",
    text: colors.textOnWarning,
  },
  danger: {
    background: colors.danger,
    pressedBackground: "#B52830",
    text: colors.textOnColor,
  },
  secondary: {
    background: colors.secondary,
    pressedBackground: colors.border,
    text: colors.text,
  },
  ghost: {
    background: "transparent",
    pressedBackground: colors.surface,
    text: colors.text,
    border: colors.border,
  },
};

const SIZES: Record<
  ButtonSize,
  {
    paddingVertical: number;
    paddingHorizontal: number;
    fontSize: number;
    minHeight: number;
  }
> = {
  sm: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    fontSize: typography.size.sm,
    minHeight: 36,
  },
  md: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    fontSize: typography.size.md,
    minHeight: 46,
  },
  lg: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xxl,
    fontSize: typography.size.lg,
    minHeight: 54,
  },
};

export interface ButtonProps extends Omit<
  PressableProps,
  "style" | "children"
> {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function Button({
  title,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  disabled,
  style,
  textStyle,
  ...rest
}: ButtonProps) {
  const v = VARIANTS[variant];
  const s = SIZES[size];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: pressed ? v.pressedBackground : v.background,
          paddingVertical: s.paddingVertical,
          paddingHorizontal: s.paddingHorizontal,
          minHeight: s.minHeight,
        },
        v.border ? { borderWidth: 1, borderColor: v.border } : null,
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={v.text} />
      ) : (
        <View style={styles.content}>
          {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}
          <Text
            style={[
              styles.text,
              { color: v.text, fontSize: s.fontSize },
              textStyle,
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radii.md,
    alignSelf: "flex-start",
  },
  fullWidth: {
    alignSelf: "stretch",
  },
  disabled: {
    opacity: 0.5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: spacing.sm,
  },
  text: {
    fontWeight: typography.weight.semibold,
  },
});
