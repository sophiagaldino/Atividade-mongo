const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", studentRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
