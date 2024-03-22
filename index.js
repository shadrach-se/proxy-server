const { parsed: env } = require("dotenv").config();
const cors_proxy = require("cors-anywhere");

const port = env.PORT || 8080;
cors_proxy
  .createServer({
    originWhitelist: ["http://127.0.0.1:5500", "*"], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, function () {
    console.log(`Server is listening on port ${env.PORT}... `);
  });
