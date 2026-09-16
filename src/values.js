const colors = {
  red: "red",
  blue: "blue",
  green: "green",
  white: "white",
  black: "black",
  yellow: "yellow",
};

const spacings = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
};

const radii = {
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  full: "9999px",
};

const fontWeights = {
  normal: "400",
  medium: "500",
  bold: "700",
};

const displays = {
  flex: "flex",
  grid: "grid",
  block: "block",
  hidden: "none",
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
  0: "0px",
  1: "1px",
  2: "2px",
  4: "4px",
  8: "8px",
};

function getColorValue(color) {
  if (Object.hasOwn(colors, color)) {
    return colors[color];
  } else {
    return null;
  }
}

function getSpacingValue(value) {
  if (Object.hasOwn(spacings, value)) {
    return spacings[value];
  } else {
    return null;
  }
}

function getRadiusValue(value) {
  if (Object.hasOwn(radii, value)) {
    return radii[value];
  } else {
    return null;
  }
}

function getFontWeightValue(value) {
  if (Object.hasOwn(fontWeights, value)) {
    return fontWeights[value];
  } else {
    return null;
  }
}

function getDisplayValue(value) {
  if (Object.hasOwn(displays, value)) {
    return displays[value];
  } else {
    return null;
  }
}

function getAlignValue(value) {
  if (Object.hasOwn(alignments, value)) {
    return alignments[value];
  } else {
    return null;
  }
}

function getJustifyValue(value) {
  if (Object.hasOwn(justifies, value)) {
    return justifies[value];
  } else {
    return null;
  }
}

function getBorderWidthValue(value) {
  if (Object.hasOwn(borderWidths, value)) {
    return borderWidths[value];
  } else {
    return null;
  }
}

const valueResolvers = {
  color: getColorValue,
  spacing: getSpacingValue,
  radius: getRadiusValue,
  fontWeight: getFontWeightValue,
  display: getDisplayValue,
  align: getAlignValue,
  justify: getJustifyValue,
  borderWidth: getBorderWidthValue,
};

export {
  getColorValue,
  getSpacingValue,
  getRadiusValue,
  getFontWeightValue,
  getDisplayValue,
  getAlignValue,
  getJustifyValue,
  getBorderWidthValue,
  valueResolvers,
};