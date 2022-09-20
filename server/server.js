const express = require("express");
const app = express();

app.use(express.json());
app.use("/flightstatistics", require("./routes/flightStatistics"));
app.listen(5000, () => {
    console.log("Server has started on port 5000");
})