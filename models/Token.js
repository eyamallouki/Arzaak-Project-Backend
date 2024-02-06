const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    token: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
