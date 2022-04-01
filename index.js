const express = require("express"),
      cors = require('cors'),
      app = express(),
      ms = require("ms"),
      fs = require("fs"),
      port = Number(3000),
      helmet = require("helmet"),
      compression = require('compression');

let corsOpt = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version'],
  optionsSuccessStatus: 204
};

let locale = __dirname + "/files", 

app.use(helmet());
app.use(cors(corsOpt));
app.use(compression());

app.get("/", (req, res) => res.status(200).send("CDN server works perfectly fine!"));

app.use('/files', require('./router/files'));

app.listen(port, () => console.log(`Started on PORT: ${port}`)); 
