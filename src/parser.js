function parseClass(className) {
  if (!className) {
    return { utility: "", value: "" };
  }

  const [utility, ...values] = className.split("-");

  return {
    utility,
    value: values.join("-"),
  };
}

export default parseClass;