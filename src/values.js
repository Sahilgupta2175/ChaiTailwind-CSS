const colors = {
  red: "red",
  blue: "blue",
  green: "green",
  white: "white",
  black: "black",
  yellow: "yellow",
  gray: "gray",
  orange: "orange",
  purple: "purple",
  pink: "pink",
  teal: "teal",
  indigo: "indigo",
  transparent: "transparent",
};

const radii = {
  none: "0px",
  sm: "2px",
  md: "6px",
  lg: "8px",
  full: "9999px",
};

const fontWeights = {
  normal: "400",
  medium: "500",
  bold: "700",
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "30px",
  "4xl": "36px",
};

const textAligns = {
  left: "left",
  center: "center",
  right: "right",
  justify: "justify",
};

const displays = {
  flex: "flex",
  grid: "grid",
  block: "block",
  inline: "inline",
  hidden: "none",
};

const flexDirections = {
  row: "row",
  col: "column",
};

const alignments = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
};

const justifies = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const borderWidths = {
  border: "1px",
  0: "0px",
  1: "1px",
  2: "2px",
  4: "4px",
  8: "8px",
};

function lookup(table) {
  return (value) => (Object.hasOwn(table, value) ? table[value] : null);
}

const getColorValue = lookup(colors);
const getRadiusValue = lookup(radii);
const getFontWeightValue = lookup(fontWeights);
const getFontSizeValue = lookup(fontSizes);
const getTextAlignValue = lookup(textAligns);
const getDisplayValue = lookup(displays);
const getFlexDirectionValue = lookup(flexDirections);
const getAlignValue = lookup(alignments);
const getJustifyValue = lookup(justifies);
const getBorderWidthValue = lookup(borderWidths);

// Any whole number is pixels: p-2 -> 2px
function getSpacingValue(value) {
  return /^\d+$/.test(value) ? `${value}px` : null;
}

const valueResolvers = {
  color: getColorValue,
  spacing: getSpacingValue,
  radius: getRadiusValue,
  fontWeight: getFontWeightValue,
  fontSize: getFontSizeValue,
  textAlign: getTextAlignValue,
  display: getDisplayValue,
  flexDirection: getFlexDirectionValue,
  align: getAlignValue,
  justify: getJustifyValue,
  borderWidth: getBorderWidthValue,
};

export { valueResolvers };
