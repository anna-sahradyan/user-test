const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
        email: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        },
        phone: {
            type: String,
            required:true
        },

    },
    {timestamps: true}
);
const User = mongoose.model("User", userSchema);
module.exports = User;