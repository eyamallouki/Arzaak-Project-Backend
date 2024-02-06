const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    adresse: { type: String },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'client', 'SEO', 'assistance'], default: 'client' },
    NumCin: { type: String, required: true, unique: true },
    Mobile: { type: String, required: true, unique: true },
    membership: { type: String },
    social: {
        twitter: { type: String },
        facebook: { type: String },
        github: { type: String }
    },
    bio: { type: String },
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    paidCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    gender: { type: String },
    mobile: { type: String },
    skill: { type: String },
    courses: [
        {
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
            courseName: String,
            status: String,
            isSurveyComplete: Boolean
        }
    ],
    survey: [
        {
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
            level: String,
            goal: String,
            workExperience: String
        }
    ],
    progress: [
        {
            course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
            module_id: String,
            subtopic_id: String,
            percent: { type: String, default: '0' }
        }
    ],
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    description: { type: String },
    specialty: { type: String },
    pays: { type: String },
    facebookId: { type: String },
    googleId: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
