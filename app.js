import express from "express";
import path from "path";
import fs from "fs";
import { readPage, constructPage } from "./utils/templateEngine.js";

const app = express();

app.use(express.static("public"));

/*====================== PAGES ============================*/

// Forside
app.get("/", (req, res) => {
  const pagePath = path.resolve("public/pages/frontend/index.html");
  const pageContent = readPage(pagePath);
  const fullPage = constructPage(pageContent, {
    tabTitle: "Opslagstavle",
    includeFooter: false,
  });
  res.send(fullPage);
});

//Dynamiske undersider
app.get("/:page", (req, res) => {
  const page = req.params.page;
  const pagePath = path.resolve(`public/pages/${page}/${page}.html`);

  // Tjek om siden findes
  if (!fs.existsSync(pagePath)) {
    res.status(404).send("Siden findes ikke");
    return;
  }

  const pageContent = readPage(pagePath);
  const fullPage = constructPage(pageContent, { tabTitle: page });
  res.send(fullPage);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
