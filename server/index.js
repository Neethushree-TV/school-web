const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const UserRoute = require("./routes/UserRoute");
const { dbConnection } = require("./config/dbConnections");
const error = require("./middlewares/error");

dotenv.config({ path: "./config/config.env" });

// Add middleware
// Body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// File upload middleware
app.use(fileUpload());
app.use(express.json());
app.use(cookie());
app.use(cors(corsOptions));
app.use("/api", UserRoute);
app.use(error);

// Database connection
dbConnection(process.env.URI);
// Start the server
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled rejections
process.on("unhandledRejection", (promise, e, reason) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);

  console.log(`Shutting down server due to unhandledRejection`);
  console.log(`${e.message}`);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (e) => {
  console.log(`Error : ${e.message}`);
  console.log(`Shutting down server due to uncaughtException`);
  server.close(() => {
    process.exit(1);
  });
});