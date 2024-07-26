const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FamilyMemberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    relationship: {
        type: String,
        required: true
    },
    personalInfo: {
        type: String,
        required: true
    },
    // Add other fields as needed
});

module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);