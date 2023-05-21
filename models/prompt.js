import { Schema, model, models, mongoose } from 'mongoose';
import User from './user';

const PromptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: [true, 'Email is required!'],
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required!'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required!'],
  },
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;
