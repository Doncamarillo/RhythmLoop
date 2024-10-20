const mongoose = require ('mongoose')
const {schema} = require ('mongoose')

const Account = new Schema (
    {
        username: {type: String, required:true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        phoneNumber : {type: Number, required: false},
        

    },
    {timestamps:true}
)

module.exports = mongoose.model ('accounts', Account)