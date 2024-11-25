import express, { Application, Request, Response } from "express";
import cors from "cors";
import path from "path";
import fileUpload from "express-fileupload";
import route from "./routes/index.routes";
import sequelize from "./config/database";

const app: Application = express();

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
      "languageCode",
    ],
    credentials: true,
  })
);

app.use(fileUpload({ parseNested: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ limit: "500mb", extended: false }));
app.use(express.json({ limit: "500mb" }));

app.use("/api", route);

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is working properly!" });
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: false })
    await sequelize.sync({ alter: true, force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};
connectDB().then(() => {
  bootstrap();
});

const PORT = process.env.PORT || 3000;

const bootstrap = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("App bootstrap error: ", error);
    process.exit(1);
  }
};
