const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const cookiParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const connectDB = require("./config/db");
const port = process.env.PORT || 3003;

const userRouter = require("./routes/userRouter");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookiParser());

app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
