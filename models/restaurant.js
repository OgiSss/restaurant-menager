const mongoose = require('mongoose')

const Restaurant = mongoose.model('Restaurant', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    connectInfo: {
        tel: Number,
        email: String,
        address: {
            city: String,
            street: String,
            houseNumber: String,
            zipcode: String
        },
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Restaurant;