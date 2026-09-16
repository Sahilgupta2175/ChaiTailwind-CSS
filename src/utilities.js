const utilities = {
  bg: {
    property: "background-color",
    type: "color",
  },
  text: {
    property: "color",
    type: "color",
  },
  p: {
    property: "padding",
    type: "spacing",
  },
  m: {
    property: "margin",
    type: "spacing",
  },
  w: {
    property: "width",
    type: "spacing",
  },
  h: {
    property: "height",
    type: "spacing",
  },
  px: {
    property: "padding-left, padding-right",
    type: "spacing",
  },
  py: {
    property: "padding-top, padding-bottom",
    type: "spacing",
  },
  mx: {
    property: "margin-left, margin-right",
    type: "spacing",
  },
  my: {
    property: "margin-top, margin-bottom",
    type: "spacing",
  },
  gap: {
    property: "gap",
    type: "spacing",
  },
  rounded: {
    property: "border-radius",
    type: "radius",
  },
  font: {
    property: "font-weight",
    type: "fontWeight",
  },
  flex: {
    property: "display",
    type: "display",
  },
  grid: {
    property: "display",
    type: "display",
  },
  block: {
    property: "display",
    type: "display",
  },
  hidden: {
    property: "display",
    type: "display",
  },
  items: {
    property: "align-items",
    type: "align",
  },
  justify: {
    property: "justify-content",
    type: "justify",
  },
  border: {
    property: "border-width",
    type: "borderWidth",
  },
};

function getUtilityInfo(utility) {
  if (Object.hasOwn(utilities, utility)) {
    return utilities[utility];
  } else {
    return null;
  }
}

export { getUtilityInfo };