const express = require('express');
const cors = require('cors')

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// List polygon

const polygon = [
  {
    name: 'coucou',
    data: [{
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  6.116337776184082,
                  46.17112338016706
                ],
                [
                  6.112775802612305,
                  46.16743807965959
                ],
                [
                  6.116037368774414,
                  46.165000890466054
                ],
                [
                  6.123461723327637,
                  46.165179225044035
                ],
                [
                  6.124706268310546,
                  46.16806222050015
                ],
                [
                  6.121015548706055,
                  46.171242256717555
                ],
                [
                  6.116337776184082,
                  46.17112338016706
                ]
              ]
            ]
          }
        }
      ]
    },]
  },
];

// GET /polygon
app.get('/polygon', (req, res) => {
  res.json({
    polygon,
  })
});

// GET /polygon/:name
app.get('/polygon/:name', (req, res) => {
  const name = req.params.name;
  res.json({
    data: polygon.filter((obj) => obj.name === name) || null,
  })
});

// POST /polygon

app.post('/polygon', cors(corsOptions), (req, res) => {
  const data = req.body;
  console.log(req.body)

  polygon.push(data);

  res.json({
    data: polygon[polygon.length],
  })
});


app.listen(3000, () => console.log('listen on http://localhost:3000'));