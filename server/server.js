const express = require("express");
const app = express();
const port = 5000;
const axios = require("axios");

app.use(express.json());

app.get("/locations", (req, res) => {
  let data = JSON.stringify({
    start: req.query.start,
    limit: req.query.limit,
  });
  let config = {
    method: "post",
    url: "https://dev-api.confidence.org/v2/confidence/locations",
    headers: {
      Username: "amitphatak$r5labs.com",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  };
  console.log();
  axios(config)
    .then((response) => {
      res.send(response.data);
      //console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
