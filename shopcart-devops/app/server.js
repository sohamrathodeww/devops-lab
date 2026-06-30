require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const appRoutes = require("./src/routes/app.routes");

app.use("/", appRoutes);

app.get("/", (req, res) => {

    res.send("🚀 ShopCart API Running");

});

app.listen(PORT, () => {

    console.log("=================================");
    console.log(`${process.env.APP_NAME}`);
    console.log(`Server Started`);
    console.log(`Environment : ${process.env.NODE_ENV}`);
    console.log(`Port : ${PORT}`);
    console.log("=================================");

});
