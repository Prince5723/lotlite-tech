import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the course'],
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide hover text for the course'],
    maxlength: [200, 'Hover text cannot be more than 200 characters']
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL for the course']
  },
  syllabusUrl: {
    type: String,
    required: [true, 'Please provide a syllabus URL for the course']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema); 