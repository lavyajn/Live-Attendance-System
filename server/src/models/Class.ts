import mongoose from 'mongoose';
const classSchema = new mongoose.Schema({
    className: {
        type: String, required: true
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    studentsIds: {
        type: [mongoose.Schema.Types.ObjectId], ref: 'User', default:[]
    },
    createdAt: {
        type: Date, default: Date.now
    }
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;

