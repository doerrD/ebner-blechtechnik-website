const fs = require("fs");

const templateFile = "./index.html";
const controlFile = "./css/site.min.css";

const version = fs.statSync(controlFile).mtimeMs;
const replacement = `href="/css/site.min.css?v=${version}"`;

const searchRegex = /href=\"\/css\/site\.css.*\"/g;

const htmlTemplate = fs
  .readFileSync(templateFile, "utf-8")
  .replace(searchRegex, replacement);

fs.writeFileSync(templateFile, htmlTemplate, {
  encoding: "utf-8"
});