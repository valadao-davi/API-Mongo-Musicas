import { Schema, model } from 'mongoose'

const musicSchema = new Schema({
    title: String,
    artist: String,
    minutes: Number, 
    seconds: Number,
    album: String
})
export default model('Music', musicSchema)
