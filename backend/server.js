import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import whatsNewRoutes from "./src/routes/whatsNewRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/whatsnew", whatsNewRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "Backend Running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});