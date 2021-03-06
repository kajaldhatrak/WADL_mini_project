
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL =
  "mongodb://kajal30:12312312@cluster0-shard-00-00.b99xg.mongodb.net:27017,cluster0-shard-00-01.b99xg.mongodb.net:27017,cluster0-shard-00-02.b99xg.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-dn3b2t-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);