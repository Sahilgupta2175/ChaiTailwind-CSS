// Each utility is one rule or a list of candidates; the first whose value resolves wins.
const utilities = {
  bg: { property: "background-color", type: "color" },
  text: [
    { property: "color", type: "color" },
    { property: "font-size", type: "fontSize" },
    { property: "text-align", type: "textAlign" },
  ],
  p: { property: "padding", type: "spacing" },
  m: { property: "margin", type: "spacing" },
  w: { property: "width", type: "spacing" },
  h: { property: "height", type: "spacing" },
  px: { property: "padding-left, padding-right", type: "spacing" },
  py: { property: "padding-top, padding-bottom", type: "spacing" },
  mx: { property: "margin-left, margin-right", type: "spacing" },
  my: { property: "margin-top, margin-bottom", type: "spacing" },
  gap: { property: "gap", type: "spacing" },
  rounded: { property: "border-radius", type: "radius" },
  font: { property: "font-weight", type: "fontWeight" },
  flex: [
    { property: "display", type: "display" },
    { property: "flex-direction", type: "flexDirection" },
  ],
  grid: { property: "display", type: "display" },
  block: { property: "display", type: "display" },
  inline: { property: "display", type: "display" },
  hidden: { property: "display", type: "display" },
  items: { property: "align-items", type: "align" },
  justify: { property: "justify-content", type: "justify" },
  border: [
    {
      property: "border-width",
      type: "borderWidth",
      extra: { "border-style": "solid" },
    },
    { property: "border-color", type: "color" },
  ],
};

// Returns an array of candidates, or null for an unknown utility.
function getUtilityInfo(utility) {
  if (Object.hasOwn(utilities, utility)) {
    return [].concat(utilities[utility]);
  } else {
    return null;
  }
}

export { getUtilityInfo };
