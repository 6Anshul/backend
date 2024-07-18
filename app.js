import express from "express";
import "dotenv/config";
import dbConnect from "./dbConnect.js";
import "express-async-errors";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1", userRoutes);
app.get("/", (req, res) => {
  res.send("<h1>JWTBasic</h1>");
});
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await dbConnect(process.env.MONGO_URL);
    console.log("Database Connected SucessFully");
    app.listen(PORT, () => {
      console.log(`Server is running at port:${PORT}`);
    });
  } catch (error) {
    console.log("error in db Connect", error);
  }
};
start();
