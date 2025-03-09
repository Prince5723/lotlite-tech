import mongoose from 'mongoose';
import bcrypt from 'mongoose-bcrypt';

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    bcrypt: true
  }
});

AdminSchema.plugin(bcrypt);

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema); 