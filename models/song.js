const mongoose = require ('mongoose')
const {schema} = require ('mongoose')

const Song = new Schema (
    {

    },
    {timestamps:true}
)

module.exports = mongoose.model ('songs',Song)