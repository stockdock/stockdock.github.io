const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();

// !  middleware
app.use(bodyParser.json());
app.use(cors());

// localport
const port = process.env.$port || 8080;

var mongo;
const uri =
  "mongodb+srv://root:root@sessiondata.0dao9.mongodb.net/session?retryWrites=true&w=majority";
MongoClient.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000,
    poolSize: 5,
  },
  (err, database) => {
    if (err) throw err;
    mongo = database;
    app.listen(port, "0.0.0.0", () => console.log("port is : " + port));
    console.log("app started");
  }
);

app.get("/", async (req, res) => {
  var collection = mongo.db("session").collection("free");
  res.send(await collection.find({}).toArray());
});
app.post("/", async (req, res) => {
  var collection = mongo.db("session").collection("free");
  if (req.body.name && req.body.email) {
    await collection.insertOne({
      name : req.body.name,
      email: req.body.email,
    });
    res.status(201).send("inserted");
  } else {
    res.status(400).send("data not given");
  }
});
app.put("/:id", async (req, res) => {
  var collection = mongo.db("session").collection("free");
  let id = req.params.id;
  if (id && req.body.url) {
    await collection.updateOne(
      {
        _id: new mongodb.ObjectID(req.params.id),
      },
      {
        $set: {
          url: req.body.url,
        },
      }
    );
    res.status(201).send("updated");
  } else {
    res.status(400).send("id is empty");
  }
});
app.delete("/:id", async (req, res) => {
  var collection = mongo.db("session").collection("free");
  let id = req.params.id;
  if (id) {
    await collection.deleteOne({
      _id: new mongodb.ObjectID(req.params.id),
    });
    res.status(201).send("deleted");
  } else {
    res.status(400).send("id is empty");
  }
});
