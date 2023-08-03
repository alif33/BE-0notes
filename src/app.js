const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const article = require("./article/routes");
const package = require("./package/routes");

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

app.use("/api", article);
app.use("/api", package);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});