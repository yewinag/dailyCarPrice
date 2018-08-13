const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    manufacture_name:{ 
        type: String, 
        required: true
    },
    manufacture_year:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    engin_power:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', CarSchema);