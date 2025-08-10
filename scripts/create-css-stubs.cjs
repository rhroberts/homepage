const fs = require("fs");

// Create stub .js files for CSS modules during static generation
const cssModules = [
  {
    file: "src/components/NavBar.module.css",
    exports: [
      "navbarWrapper",
      "navbar",
      "navItem",
      "navActive",
      "menu",
      "menuButton",
      "navItemsWrapper",
    ],
  },
  { file: "src/components/Contact.module.css", exports: ["contact", "icon"] },
  {
    file: "src/components/Footer.module.css",
    exports: ["footerWrapper", "footer"],
  },
  {
    file: "src/pages/Projects.module.css",
    exports: ["projectCardContent", "projectCardImage"],
  },
  { file: "src/pages/Resume.module.css", exports: ["resume"] },
];

cssModules.forEach(({ file, exports }) => {
  const stubFile = file + ".js";
  const exportObj = exports.reduce((obj, name) => {
    obj[name] = name;
    return obj;
  }, {});

  const content = `export default ${JSON.stringify(exportObj, null, 2)};`;
  fs.writeFileSync(stubFile, content);
  console.log(`Created ${stubFile}`);
});

console.log("CSS module stubs created for static generation");
