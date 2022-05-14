export const makeHtml = (
  body: string,
  head: string[] = [],
  footer: string[] = []
) => {
  let html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
    ${head.join("\n")}
  </head>

  <body>
    ${body}
    ${footer.join("\n")}
  </body> 
</html>
`;

  const minify = () => {
    html = html.replace(/(?=<!--)([\s\S]*?)-->/gm, ""); // replace html comments
    html = html.replace(/\s+/gm, " "); // remove unnecessary spaces
  };

  minify();

  return html;
};
