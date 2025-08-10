const fs = require("fs");

// Remove stub .js files after static generation
const cssStubs = [
  "src/components/NavBar.module.css.js",
  "src/components/Contact.module.css.js",
  "src/components/Footer.module.css.js",
  "src/pages/Projects.module.css.js",
  "src/pages/Resume.module.css.js",
];

cssStubs.forEach((file) => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Removed ${file}`);
  }
});

console.log("CSS module stubs cleaned up");
