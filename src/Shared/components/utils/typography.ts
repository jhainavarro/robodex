export type TextSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export const textSizes: { [key in TextSize]: string } = {
  xsmall: "12px",
  small: "14px",
  medium: "16px",
  large: "20px",
  xlarge: "28px",
};

export const lineHeights: { [key in TextSize]: string } = {
  xsmall: "14px",
  small: "16px",
  medium: "20px",
  large: "26px",
  xlarge: "36px",
};

export type TextWeight = 400 | 500 | 600 | 700;
