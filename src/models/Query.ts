// models/Query.js
import mongoose from 'mongoose';

const QuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  phoneNo: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

// Check if the model already exists to prevent overwriting during hot reloads
export default mongoose.models.Query || mongoose.model('Query', QuerySchema);