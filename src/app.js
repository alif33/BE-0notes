const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes");
// const artistRoutes = require("../routes/artistRoutes");
// const artRoutes = require("../routes/artRoutes");
// const FFRoutes = require("../routes/FFRoutes");

env.config();

mongoose
  .connect(
    `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PASSWORD }@cluster0.umgbx4w.mongodb.net/${ process.env.DB_DATABASE }?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send(`Server is running on port: ${process.env.PORT}`)
})

app.use("/api", postRoutes);
// app.use("/api", artistRoutes);
// app.use("/api", artRoutes);
// app.use("/api", FFRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
