import express, { json, urlencoded } from 'express';
const app = express();
import { connect } from 'mongoose';

connect('mongodb://127.0.0.1:27017/soundify');

app.use(json())
app.use(urlencoded({ extended: true }));

import musicRoute from './routes/musicRoute.js';
app.use('/soundify/music', musicRoute)

app.listen(3000, ()=> {
    console.log("Server started on port 3000")
})