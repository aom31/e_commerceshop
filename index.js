const express = require('express');
const app = express();
const port = 5000
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
dotenv.config();

mongoose
    .connect(process.env.MONGOS_URL)
    .then(() => console.log("database mongoose connted success!"))
    .catch((err) => {
        console.log(err);
});

app.use(express.json());
app.use("/user/test", userRoute);


app.listen(process.env.PORT || port, () => {
    console.log("backend is running ")
})