import fs from "fs";

export function readPage(path) {
  return fs.readFileSync(path, "utf8");
}

const header = readPage("./public/components/header/header.html");
const footer = readPage("./public/components/footer/footer.html");

export function constructPage(pageContent, options = {}) {
  const includeFooter = options.includeFooter !== false; //jeg vil kun have footer med på undersider

  let html = header.replace( "$$TAB_TITLE$$", options.tabTitle || "Documentation");
  html += pageContent;
  if (includeFooter) html += footer;

  return html;
}
