import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

// Forside
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/frontend/index.html"));
});

// Undersider
app.get("/:page", (req, res) => {
  const filePath = path.resolve(`public/frontend/${req.params.page}.html`);
  res.sendFile(filePath, err => {
    if (err) res.status(404).send("Siden findes ikke");
  });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})