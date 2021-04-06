const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// List polygon

const polygon = [
  {
    id: 1,
    name: "polygon 1",
    data:
      '[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[6.1387530317657575,46.20921408356362],[6.140270005030593,46.20684083188675],[6.145316496521049,46.20767293616188],[6.143400772942199,46.21079917737712],[6.140002918480436,46.2129079837066],[6.1387530317657575,46.20921408356362]]]}}]',
  },
  {
    id: 2,
    name: "polygon 2",
    data:
      '[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[6.1387530317657575,46.20921408356362],[6.140270005030593,46.20684083188675],[6.145316496521049,46.20767293616188],[6.143400772942199,46.21079917737712],[6.140002918480436,46.2129079837066],[6.1387530317657575,46.20921408356362]]]}}]',
  },
  {
    id: 3,
    name: "polygon 3",
    data:
      '[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[6.1387530317657575,46.20921408356362],[6.140270005030593,46.20684083188675],[6.145316496521049,46.20767293616188],[6.143400772942199,46.21079917737712],[6.140002918480436,46.2129079837066],[6.1387530317657575,46.20921408356362]]]}}]',
  },
  {
    id: 4,
    name: "polygon 4",
    data:
      '[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[6.1387530317657575,46.20921408356362],[6.140270005030593,46.20684083188675],[6.145316496521049,46.20767293616188],[6.143400772942199,46.21079917737712],[6.140002918480436,46.2129079837066],[6.1387530317657575,46.20921408356362]]]}}]',
  },
];

// GET /polygon
app.get("/polygon", (req, res) => {
  res.send({
    polygon,
  });
});

// GET /polygon/:id
app.post("/polygon/:id", (req, res) => {
  const reqId = parseInt(req.params.id);
  // const findPolygon = polygon.find((poly) => poly.id === reqId);
  polygon.splice([reqId - 1], 1)
  polygon.splice(reqId -1, 0, req.body)
  res.send({
    polygon,
  });
});

// POST /polygon

app.post("/polygon", cors(corsOptions), (req, res) => {
  const data = req.body

  polygon.push(data);
  console.log(polygon);

  res.json({
    ...polygon[polygon.length],
  });
});

app.listen(3000, () => console.log("listen on http://localhost:3000"));
