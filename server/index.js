const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.userDB}:${process.env.secretKEY}@clusterone.lxvfmw8.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOne`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const menuCollection = client.db('bistro_boss').collection('menu')
    const reviewCollection = client.db('bistro_boss').collection('reviews')

    // get menu collection
    app.get('/menu',async(req,res)=>{
        const result = await menuCollection.find().toArray()
        res.send(result)
    })

    // get review collection
    app.get('/review',async(req,res)=>{
        const result = await reviewCollection.find().toArray()
        res.send(result)
    })
    
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(`Bistro Boss Return`);
});

app.listen(port, () => {
  console.log(`Bistro Boss is return in port ${port}`);
});
