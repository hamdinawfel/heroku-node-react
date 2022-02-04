const path = require("path");
const express = require("express");
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./interview-test/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "interview-test", "build", "index.html"));
  });
}
// port
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port : ${port}`));
