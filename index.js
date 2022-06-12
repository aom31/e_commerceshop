const express = require('express');
const app = express();
const port = 3000
const mongoose = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect(
        process.env.MONGOS_URL
    )
    .then(() => console.log("database mongoose connted success!"))
    .catch((err) => {
        console.log(err);
});
app.listen(process.env.PORT || port, () => {
    console.log("backend is running ")
})