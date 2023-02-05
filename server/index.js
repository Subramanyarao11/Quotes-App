const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const userRoutes = require("./routers/user.js")
app.use("/user", userRoutes);


app.use(express.static(__dirname + "/dist/"))
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(PORT, () => {
    console.log(`App is running on`, PORT);
});
