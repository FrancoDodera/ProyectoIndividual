const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require("./src/db.js");
const PORT = 3001;
const { loadDb } = require("./src/loadDb");

conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    await loadDb();
    console.log(`Server listening on port ${PORT}`);
  });
});
