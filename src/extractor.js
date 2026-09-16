function extractClassesFromHTML(html) {
  const classes = new Set();

  const matches = html.match(/class="([^"]+)"/g) || [];

  matches.forEach((match) => {
    const classValue = match.slice(7, -1);
    const classList = classValue.split(" ");

    classList.forEach((className) => {
      classes.add(className);
    });
  });

  return Array.from(classes);
}

export default extractClassesFromHTML;