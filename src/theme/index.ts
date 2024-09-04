import { type GlobalThemeOverrides } from "naive-ui";

export const defaultTheme = {
  name: "main",
  common: {
    warningColor: "#FEEEC1FF",
    primaryColor: "#2A3593FF",
    primaryColorHover: "#2A3593E8",
    primaryColorPressed: "#1F2B93FF",
    successColor: "#4D9B35FF",
    errorColor: "#C43D32",
  },
  Alert: {
    colorWarning: "#FEEEC1FF",
  },
  Button: {
    colorDisabled: "#C3C5C3FF",
    textColorDisabled: "#FFFFFFFF"
  },
  Form: {
    labelFontWeight: 700,
  },
  Input: {
    borderRadius: "5px",
  }
} as GlobalThemeOverrides;
