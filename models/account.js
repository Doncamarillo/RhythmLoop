const mongoose = require ('mongoose')
const {schema} = require ('mongoose')

const Account = new Schema (
    {

    },
    {timestamps:true}
)

module.exports = mongoose.model ('accounts', Account)